
node{
 def remote = [:]
  remote.name = 'oraclevm'
  remote.host = '152.67.160.182'
  remote.user = 'opc'
  remote.password = 'Muzammil073#'
  remote.allowAnyHosts = true
  stage('checkout') {
           checkout scm
  }  
 stage('step1'){
  sshPut remote: remote, from: 'nayab801.sh', into: '/home/opc'
 }
  stage('step2'){
 sshCommand remote: remote, command: "sudo sh /home/opc/nayab801.sh"
 }
  stage('step3'){
 sshCommand remote: remote, command: "pwd"
 }
  stage('step4'){
 sshCommand remote: remote, path: "/home/opc/nayab801.sh"
 }
} 

