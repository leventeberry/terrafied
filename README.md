# Terrified (A Terraform Boilerplate Setup CLI)

## Introduction
This is a cross-platform CLI tool for generating a Terraform project structure with essential configuration files. It works on **Windows (CMD, PowerShell), Mac (Terminal), and Linux (Terminal)**. The CLI tool asks a series of questions and then sets up a Terraform project folder with a boilerplate configuration.

## Features
- Interactive CLI prompting for project details
- Automatic folder structure creation
- Generates `main.tf`, `variables.tf`, and `provider.tf`
- Supports multiple Terraform providers (**AWS, Google Cloud, Azure**) 
- Works cross-platform (Windows, Mac, Linux)

## Prerequisites
Ensure you have the following installed before running this CLI tool:

- **Node.js** (required runtime environment) - [Download Node.js](https://nodejs.org/)

## Installation & Setup

### **1. Clone the Repository**
```sh
git clone https://github.com/leventeberry/terrafied.git
cd terrafied
```

### **2. Run the JavaScript Version**

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the CLI:
   ```sh
   npm start
   ```

## Usage

After running the CLI, answer the interactive questions to set up your Terraform project. Example:

```sh
Welcome to the Terraform Project Setup CLI
Enter project name [terraform_project]: my-infra
Enter provider (aws, google, azurerm) [aws]: aws
Enter region [us-east-1]: us-west-2
```

### **Generated Project Structure**
```
my-infra/
│── main.tf
│── provider.tf
│── variables.tf
│── modules/
│── environments/
│   ├── dev/
│   ├── prod/
```

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added feature"`)
4. Push to your fork (`git push origin feature-name`)
5. Create a pull request

## License
This project is licensed under the **MIT License**. See the LICENSE file for details.

## Author
**LeVente Berry Jr.** - [GitHub Profile](https://github.com/leventeberry)

