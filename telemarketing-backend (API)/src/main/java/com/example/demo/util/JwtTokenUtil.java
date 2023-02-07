package com.example.demo.util;

import com.example.demo.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenUtil {
    private final String ISSUER = "Issuer";
    @Value("${authentication.jwt.signing-key}")
    private String signingKeyEncoded;

    public Map<String, String> getAccessToken(User user) {
        Date issuedAt = new Date();
        Calendar cal = Calendar.getInstance();
        cal.setTime(issuedAt);
        cal.add(Calendar.HOUR_OF_DAY, 2);
        Date expiresAt = cal.getTime();
        Key key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(signingKeyEncoded));

        String token = Jwts.builder()
                .setIssuer(ISSUER)
                .setSubject(String.valueOf(user.getId()))
                .setIssuedAt(issuedAt)
                .setExpiration(expiresAt)
                .claim("email", user.getUsername())
                .signWith(key)
                .compact();

        Map<String, String> payload = new HashMap<>();
        payload.put("access_token", token);

        return payload;
    }

    public boolean isValid(String token) {
        try {
            getClaims(token);
            return true;
        } catch (JwtException exception) {
            return false;
        }
    }

    public String getUsername(String token) {
        return getClaims(token).getBody().get("email").toString();
    }

    private Jws<Claims> getClaims(String token) throws JwtException {
        Key key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(signingKeyEncoded));

        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token);
    }
}
