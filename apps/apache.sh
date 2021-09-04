#! /bin/bash

b='\033[1m'
r='\E[31m'
g='\E[32m'
c='\E[36m'
endc='\E[0m'
enda='\033[0m'

clear

# Change default shell from sh to bash
sed -i 's/\/bin\/sh/\/bin\/bash/g' /etc/passwd

# Initialisation of Installer
printf "\n\n$c$b    Loading Installer $endc$enda" >&2
if sudo apt-get update &> /dev/null
then
    printf "\r$g$b    Installer Loaded $endc$enda\n" >&2
else
    printf "\r$r$b    Error Occured $endc$enda\n" >&2
    exit
fi

printf "\r$c$b    Starting Installation $endc$enda\n" >&2

# Install tools
printf "$g$b    Installing Tools... $endc$enda\n" >&2
sudo apt-get install gdebi -y &> /dev/null
sudo apt-get install vim -y &> /dev/null
sudo apt-get install net-tools -y &> /dev/null
if sudo apt install nano -y &> /dev/null
then
    printf "\r$c$b    Tools Installed $endc$enda\n\n" >&2
else
    printf "\r$r$b    Tools Not Installed $endc$enda\n\n" >&2
fi

# Install linux Generic and Headers
printf "$g$b    Installing Linux Generic and Headers... $endc$enda\n" >&2
if sudo apt-get install linux-generic -y &> /dev/null
then
    printf "\r$c$b    Installed Linux-Generic $endc$enda\n\n" >&2
else
    printf "\r$r$b    Not Installed Linux-Generic $endc$enda\n\n" >&2
fi
sudo apt-get install linux-headers-`uname -r` -y &> /dev/null

# Install Apache Web Server and UFW Firewall
printf "$g$b    Installing Firewall... $endc$enda\n" >&2
if sudo apt-get install ufw -y &> /dev/null
then
    printf "\r$c$b    Firewall Installed $endc$enda\n\n" >&2
else
    printf "\r$r$b    Firewall Not Installed $endc$enda\n\n" >&2
fi

printf "$g$b    Installing Apache2 Web Server... $endc$enda\n" >&2
if sudo apt-get install apache2 -y &> /dev/null
then
    printf "\r$c$b    Installed Apache Web Server $endc$enda\n\n" >&2
else
    printf "\r$r$b    Apache2 Not Installed $endc$enda\n\n" >&2
fi

# Setup Firewall
printf "$g$b    Setting up Firewall... $endc$enda\n" >&2
sudo ufw app list &> /dev/null
sudo ufw allow "OpenSSH" &> /dev/null
sudo ufw allow "Apache Full" &> /dev/null
printf "$c$b    Firewall Setup Completed $endc$enda\n\n" >&2

# Install MySQL
printf "$g$b    Installing MySQL... $endc$enda\n" >&2
if sudo apt-get install mysql-server -y &> /dev/null
then
    printf "\r$c$b    MySQL Installed $endc$enda\n\n" >&2
else
    printf "\r$r$b    MySQL Not Installed $endc$enda\n\n" >&2
fi

# Install PHP
printf "$g$b    Installing PHP... $endc$enda\n" >&2
if sudo apt-get install php libapache2-mod-php php-mysql -y &> /dev/null
then
    printf "\r$c$b    PHP Installed $endc$enda\n\n" >&2
else
    printf "\r$r$b    PHP Not Installed $endc$enda\n\n" >&2
fi

# add a info.php file in your web server
cd /var/www/html &> /dev/null
if sudo wget https://cdn.jsdelivr.net/gh/apix-loi/jsdelivr/apps/about.php &> /dev/null
then
    printf "\n$c$b    PHP info available on - localhost/about.php $endc$enda\n\n"
else
    printf "\n$c$b    Completing Setup... $endc$enda\n\n"
fi

# Restart Apache2
sudo service apache2 stop &> /dev/null
sudo service apache2 start &> /dev/null
sudo service apache2 restart &> /dev/null

printf "\n$g$b    Installation Completed $endc$enda\n\n"
exit
