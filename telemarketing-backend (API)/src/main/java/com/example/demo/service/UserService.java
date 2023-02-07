package com.example.demo.service;


import com.example.demo.dto.UserDto;
import com.example.demo.dto.UserRegisterDto;
import com.example.demo.entity.User;
import com.example.demo.exception.ItemAlreadyExistException;
import com.example.demo.exception.UserAlreadyExistsException;
import com.example.demo.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.security.Principal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public UserService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder

    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public void saveUser(UserRegisterDto userDto) {
        User user = new User(
                0L,
                passwordEncoder.encode(userDto.getPassword()),
                userDto.getFirstName(),
                userDto.getSurname(),
                userDto.getUsername()
        );

        if(userExists(userDto.getUsername())){
            throw new UserAlreadyExistsException(userDto.getUsername());
        }
            userRepository.save(user);

    }
    private boolean userExists(String name) {
        return userRepository.findUserByUsername(name).isPresent();
    }


    private User getUser(String username) throws Exception {
        return Optional.ofNullable(userRepository.findUserByUsername(username))
                .map(Optional::get)
                .orElseThrow(() -> new Exception());
    }


    @Transactional
    public List<UserDto> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(UserDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public UserDto getUser(Principal principal) throws Exception {
        return new UserDto(getUser(principal.getName()));
    }


}
