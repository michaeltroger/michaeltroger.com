---
layout: post
title: Raspberry Pi Print Server
---
In this article I will describe how to set up a USB printer as a (wireless) network printer, using a Raspberry Pi 3. Finally I will connect my Linux desktop with the printer. In this example I'm connecting a Brother laser printer, however most of the tutorial is applicable for any USB printer.

# Install the Operating System
Install the **Raspberry Pi Imager** software on your (Linux) desktop, it makes the installation of the images easily. On EndeavourOS (Arch) this is as easy as running:
{% highlight shell %}pacman -S rpi-imager{% endhighlight %}

Connect a Micro-SD card with your desktop PC and open the program.

## Operating System Choice
You can choose to install Raspberry Pi OS with desktop environment or without.
For the purpose of this project I recommend to install **Raspberry Pi OS Lite (64-bit)**, since we won't need the desktop environment.

## Custom Configuration
When proceeding to the next installation step, the Raspberry software will ask you whether to use a custom configuration. Choose to do so, since it will make things easier later.

Recommended settings:
* **Set a password** (recent OS versions don't have a default password)
* **Enable SSH**: Choose "Allow public-key authentication only" and copy your desktop PC's public SSH key into the text field (in case you don't have one yet, the software can generate one for you). This will allow you to login without password
* Choose a hostname: e.g. raspberrypi
* (Optionally) enter your Wi-Fi settings, in case you can't connect a network cable

# Configure the Raspberry Pi
Connect the Pi to your router with a network cable. Plug the USB printer into your Pi. Insert the Micro-SD card and turn the Raspberry on. It can take a minute until you can login:
{% highlight shell %}ssh pi@raspberrypi{% endhighlight %}

First update the system:
{% highlight shell %}
sudo apt update
sudo apt upgrade
{% endhighlight %}


# CUPS Configuration
Next we will need to set up the CUPS printing system.
Install CUPS:
{% highlight shell %}sudo apt install cups{% endhighlight %}
Add your user to the *lpadmin* group:
{% highlight shell %}sudo usermod -a -G lpadmin pi{% endhighlight %}
Enable the sharing of printers with your network:
{% highlight shell %}cupsctl --share-printers{% endhighlight %}
Open a browser on your desktop PC and open the CUPS admin page (it might take a couple of seconds until the address can be resolved)
{% highlight shell %}http://raspberrypi:631{% endhighlight %}

When you go to the administration page, it will ask you to switch to the actual IP address of your Pi for managing printers. Follow this request.

When choosing to add a printer, your printer should be shown. After proceeding you're asked to select a driver. In case no fitting driver is listed, you need to install the driver before being able to continue. If it's listed you can skip the driver section following.

## Install Printer Driver
Now install the appropriate printer drivers. In case of my Brother laser printer there are no ARM drivers available out of the box, so they need to be installed manually. Luckily there are open-source drivers available for my printer, which can easily be installed:
{% highlight shell %}sudo apt install printer-driver-brlaser{% endhighlight %}

## Add Printer to CUPS
Back in the CUPS admin page the device can now be selected. Choose to share this printer. Print a test page from within the CUPS web interface.

# Connect the Desktop PC
On EndeavourOS (KDE) the printer can't be found out of the box. But there is a handy tool to the rescue. Install it as follows:
{% highlight shell %}pacman -S system-config-printer{% endhighlight %}
Then launch the tool:
{% highlight shell %}system-config-printer{% endhighlight %}
Follow the instructions (applying firewall settings), add the printer and that should be it!
