resource "aws_secretsmanager_secret" "secretmasterDB"{
    name = "SecretsRetriever"
}

resource "aws_secretsmanager_secret_version" "sversion"{
    secret_id = aws_secretsmanager_secret.secretmasterDB.id
    secret_string = <<EOF
    {
        "ClientID":"thing",
        "ClientSecret":"34343434"
    }
    EOF
}