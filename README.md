# Raccolta di vari miei appunti

## Come pushare cose nuove

Eseguire il seguente comando per eseguire uno split della directory "public"

	git subtree split -P public 

Copiare ciò che viene printato in stdout nel seguente comando ed eseguirlo per pushare a master i contenuti generati

	git push -f origin <split-uid>:master