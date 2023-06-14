

pipeline {
    agent any
    stages {
        stage('check out') {
            steps {
              checkout scm
            }
        }
         stage('up ') {
            steps {
              bat 'docker-compose down'
            }
        }
         
    }
    post { 
        aborted { 
            echo 'ABORTED'
        }
         success { 
            echo 'SUCCESS'
        }
         failure { 
            echo 'FAILURE'
        }
        changed { 
            echo 'FAILURE'
        }
    }
    
} 
