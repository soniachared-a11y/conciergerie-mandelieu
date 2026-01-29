# Pousser la v1 sur GitHub

Le commit **v1** est déjà créé en local. Il reste à créer le dépôt sur GitHub puis à pousser.

## 1. Créer le dépôt sur GitHub

1. Va sur **https://github.com/new**
2. **Repository name :** `conciergerie-mandelieu`
3. **Description (optionnel) :** Riviera Conciergerie - Site Next.js
4. Choisis **Public**
5. **Ne coche pas** "Add a README", ".gitignore" ou "license" (le projet les a déjà)
6. Clique sur **Create repository**

## 2. Lier et pousser depuis ton projet

Si ton identifiant GitHub n’est **pas** `evolunia`, modifie l’URL dans la 2ᵉ commande.

```bash
cd /Users/evolunia/conciergerie-mandelieu

# Si le dépôt a un autre nom ou un autre compte, change l’URL :
# git remote set-url origin https://github.com/TON_USERNAME/NOM_DU_REPO.git

git push -u origin main
```

Si GitHub te demande de t’authentifier, utilise ton **Personal Access Token** (pas ton mot de passe) :  
Paramètres GitHub → Developer settings → Personal access tokens.

---

Une fois le push fait, ta v1 sera bien sauvegardée sur GitHub.
