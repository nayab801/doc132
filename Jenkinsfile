

pipeline {
    agent any
    stages {
        stage('check out') {
            steps {
              checkout scm
            }
        }
         stage('Build Image') {
            steps {
              bat 'docker build -t alpine1 -f Dockerfile1  .'
            }
        }
         stage('Tag Image') {
            steps {
               bat 'docker tag alpine1 nayab801/alpine1'
            }
         }
        stage('Push Image') {
            steps {
               bat 'docker login -u nayab801 -p Rasool@801'
                bat 'docker push nayab801/alpine1'
            }
        }
        stage ('Run Image') {
            steps {
            bat 'docker run --name d11 -p 7701:80 -d  alpine1'
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
