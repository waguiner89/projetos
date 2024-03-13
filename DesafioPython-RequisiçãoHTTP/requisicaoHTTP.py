import requests

# Substitua os valores abaixo com suas informações reais
nome_completo = "WagnerCamargoVaz"
email = "wagner.vaz89@hotmail.com"
cpf = "382.978.078-86"  # Substitua pelos números reais do seu CPF

# URL da requisição
url = "https://tranquil-rex-405218.rj.r.appspot.com/hashCodeServer"

# Parâmetros da requisição
params = {
    "nome": nome_completo,
    "email": email,
    "cpf": cpf
}

# Fazendo a requisição POST
response = requests.post(url, params=params)

# Verificando a resposta
if response.status_code == 200:
    print("Requisição bem-sucedida!")
    print("Resposta:", response.text)
else:
    print(f"Falha na requisição. Código de status: {response.status_code}")
    print("Resposta:", response.text)
