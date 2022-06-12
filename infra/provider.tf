provider "aws" {
  region = "eu-west-1"
  
  default_tags {
    tags = {
      Name        = var.app_name
      Environment = var.environment
      Owner       = "my-team"
    }
  }
}