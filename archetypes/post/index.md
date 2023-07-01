+++
title = "{{ replace .Name "-" " " | title }}"
type = "posts"
Date = {{ .Date }}

{{ $pub_date := .Date | time.AsTime }}
PublishDate = "{{ $pub_date.AddDate 0 0 1 | time.Format "2006-01-02" }}"
ExpiryDate = ""
draft = true
+++