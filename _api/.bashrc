# set DISPLAY variable to the IP automatically assigned to WSL2
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0

echo $DISPLAY
# something like 192.168.64.1:0.0

sudo /etc/init.d/dbus start &> /dev/null

sudo visudo -f /etc/sudoers.d/dbus

# add on open: <your_username> ALL = (root) NOPASSWD: /etc/init.d/dbus