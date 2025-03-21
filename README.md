# CRUD-FIREBASE-NODEJS

# 1. install firebase package to config
#   npm install firebase
# 2. First, check if dotenv is installed by running
#   npm list dotenv
# 3.  If it’s not installed, run
#   npm install dotenv
# 4. Setup firebase credentials and Port number in the .env file


# ADD USER END POINT WITH TEST DATA 
#   POST: http://localhost:{port}/addUser
#   {
#       "name": "John Doe",
#       "status": "Active",
#       "age": 32,
#       "profession": "Software Engineer"
#    }


# GET ALL USERS FROM THE COLLECTIONS
#   GET:  http://localhost:{port}/getUsers

# GET SPECIFIC USER FROM THE COLLECTION
#   GET:  http://localhost:{port}/getUsers/{DOCUMENT_ID}

# UPDATE SPECIFIC USER FROM THE COLLECTION
#   PUT:  http://localhost:{port}/updateUser/{DOCUMENT_ID}

# DELETE SPECIFIC USER FROM THE COLLECTION
#   PUT:  http://localhost:{port}/deleteUser/{DOCUMENT_ID}