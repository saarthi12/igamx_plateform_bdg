# Modern Gaming Platform with Real-time Betting and Payment Processing

A comprehensive gaming platform that provides real-time betting, secure payment processing, and user management with multi-language support. The platform offers various game types including lottery, slots, and sports betting with integrated payment gateways.

The platform is built using PHP for the backend API services, with a modern Vue.js frontend for responsive user interactions. It features a robust admin dashboard for managing users, transactions, and game outcomes, along with comprehensive payment processing capabilities supporting multiple payment methods including USDT and bank transfers.

Key features include:
- Real-time betting system with multiple game types
- Secure payment processing with USDT and bank transfer support
- Multi-language support with 8+ languages
- Comprehensive admin dashboard for user and transaction management
- VIP membership system with rewards and benefits
- JWT-based authentication and authorization
- Automated commission calculation and distribution

## Repository Structure
```
.
├── admin/                  # Admin dashboard and management interface
│   ├── js/                # Admin panel JavaScript files
│   ├── vendors/           # Third-party libraries and dependencies
│   └── *.php             # Admin control panel PHP files
├── apifolder/             # Backend API implementation
│   ├── api/              # Core API endpoints
│   └── webapi/           # Web service API implementations
├── assets/               # Frontend assets
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   └── png/             # Image assets
├── pay/                  # Payment processing system
│   ├── assets/          # Payment UI assets
│   └── *.php           # Payment processing logic
└── vendors/             # Third-party libraries
```

## Usage Instructions
### Prerequisites
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Node.js 16.x or higher for frontend development
- Web server (Apache/Nginx)
- SSL certificate for secure transactions

Required PHP extensions:
- mysqli
- json
- curl
- openssl

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-directory]
```

2. Configure the database:
```bash
# Edit apifolder/conn.php with your database credentials
define('DB_SERVER', 'your_server');
define('DB_USERNAME', 'your_username');
define('DB_PASSWORD', 'your_password');
define('DB_NAME', 'your_database');
```

3. Set up the web server:
```apache
# Apache configuration
<VirtualHost *:80>
    DocumentRoot "/path/to/project"
    ServerName your-domain.com
    
    <Directory "/path/to/project">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```



4. Set up SSL certificate and configure HTTPS.

### Quick Start
1. Access the admin panel at `/admin`
2. Log in with administrator credentials
3. Configure game settings and payment gateways
4. Set up commission rates and VIP levels
5. Monitor transactions and user activities

### More Detailed Examples
1. Processing a payment:
```php
// Example payment processing
$payment = new Payment();
$result = $payment->process([
    'amount' => 100,
    'currency' => 'USD',
    'payment_method' => 'usdt',
    'user_id' => $userId
]);
```

2. Creating a betting transaction:
```php
// Example betting transaction
$bet = new Betting();
$result = $bet->placeBet([
    'user_id' => $userId,
    'game_type' => 'lottery',
    'amount' => 50,
    'bet_details' => $betData
]);
```

### Troubleshooting
Common issues and solutions:

1. Database Connection Issues
- Error: "Cannot connect to database"
- Solution: Verify database credentials in conn.php
- Check MySQL service is running
- Ensure proper permissions are set

2. Payment Processing Errors
- Error: "Payment gateway not responding"
- Enable debug mode in pay/wepay.php
- Check payment gateway API credentials
- Verify SSL certificate is valid

3. API Authentication Issues
- Error: "Invalid token"
- Check JWT token expiration
- Verify API credentials
- Clear browser cache and cookies


### Database Resources
- MySQL database for user data and transactions
- Connection configuration in apifolder/conn.php
- Secure credentials management with environment variables

### Payment Gateway Integration
- Multiple payment processor support
- USDT payment processing
- Bank transfer integration
- Payment verification system

