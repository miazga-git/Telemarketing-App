# Telemarketing App

The application has been designed so that it can be implemented in the infrastructure of a telemarketing company. Application offers support to the telemarketer, which consists primarily in displaying lists of products, customers and enabling the telemarketer to sign the status of the transaction - whether it was successful or not.

In addition, the application has been equipped with mechanisms whose task is to increase the effectiveness of the telemarketer, these are, among others, the function of offering a discount on a given product, the function of statistics, from which the telemarketer can draw conclusions about the effectiveness of attempts to sell products. In addition, while the application is running, an association analysis is carried out together with the recording of subsequent transactions, which suggests which products the customer may want to purchase. 

The application has been secured with authentication and authorization mechanisms based on Json Web Token.

## Functionalities
- user registration
- user login / logout
- adding a new product to the database
- adding a new client to the database
- adding successful / unsuccessful selling transaction
- viewing customer data
- viewing product data
- viewing statistics
- proposing a product based on an association analysis
- pllaning selling try in the future

## Security features
- encrypting user passwords stored in the database
- password policy: at least 8 characters, at least one letter, number and special character
- logout option
- data validation at the front and backend level

## Useful information about building and deploying app
### 1. Creating a project in React: 
```shell
npx create-react-app [nazwa katalogu]
```

### 2.Running a project in react: 
```shell
npm start
```

### 3.Adding a bootstrap to the project: 
```shell
npm install bootstrap --save #and change in index.html (frontend) - adding bootstrap
```

### 4.Axios module installation: 
```shell
npm install axios --save
```

### 5.Router-dom installation: 
```shell
npm install react-router-dom
```

### 6.Adding styles to the app:

[Link to getpapercss](https://www.getpapercss.com/)


## Architecture and Technologies

![image](https://user-images.githubusercontent.com/82395921/219469842-542d4b12-378a-41ac-9fd5-a356418e100d.png)



## Application GUI

![image](https://user-images.githubusercontent.com/82395921/219468390-b4800f2c-de1d-4c1e-9c32-edf8f16a3595.png)
|:--:| 
| *Login panel* |

![2023-02-16 20_24_43-Window](https://user-images.githubusercontent.com/82395921/219468892-101c6a27-404d-48dd-8efb-953537e1bb0d.png)
|:--:| 
| *Registration panel, with data validation* |

![2023-02-16 20_25_48-Window](https://user-images.githubusercontent.com/82395921/219469124-b6fe2817-5228-46ac-bc20-7c3557c7d231.png)
|:--:| 
| *Main panel* |

![2023-02-16 20_26_16-Window](https://user-images.githubusercontent.com/82395921/219469197-590afe8c-4df0-4860-9bc9-59db9d3dba11.png)
|:--:| 
| *Add product panel* |

![2023-02-16 20_26_35-Window](https://user-images.githubusercontent.com/82395921/219469261-d79646ca-eb9e-419e-a60d-25cd8283e3c0.png)
|:--:| 
| *Stats panel* |

![2023-02-16 20_29_13-Window](https://user-images.githubusercontent.com/82395921/219469306-a83859a0-119f-446e-8eb3-ca33d4d158e3.png)
|:--:| 
| *Choose client panel* |

![2023-02-16 20_29_46-Window](https://user-images.githubusercontent.com/82395921/219469375-16b93f96-e3a5-4437-ac07-f5e77da7c62f.png)
|:--:| 
| *Selling panel with discount option* |

![2023-02-16 20_30_03-Window](https://user-images.githubusercontent.com/82395921/219469453-597568f4-cbed-464d-bbe7-56bb4691ee52.png)
|:--:| 
| *Plan selling in the future panel* |

