curl 'https://morning-falls-75749/change-password' \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
"passwords": {
  "old": "'"${PASSWORD}"'",
  "new": "'"${PASSWORD}"'"
}
}'

echo
