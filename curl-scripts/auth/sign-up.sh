curl 'https://morning-falls-75749/sign-up' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '
  {
    "credentials":
    {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }
  '

echo
