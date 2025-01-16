---
layout: post
title: Raspberry Pi Print Server
---
*Last updated: 2024-12-18*

In this article I will describe how to set up a USB printer as a (wireless) network printer, using a Raspberry Pi 3. Finally I will connect my Linux desktop and other clients with the printer. In this example I'm connecting a Brother laser printer (HL-L2310D), however most of the tutorial is applicable for any USB printer.

# Install the Operating System
Install the **Raspberry Pi Imager** software on your (Linux) desktop, it makes the installation of the images easily. On EndeavourOS (Arch) this is as easy as running:
{% highlight shell linenos %}pacman -S rpi-imager{% endhighlight %}

Connect a Micro-SD card to your desktop PC and open the program.

## Operating System Choice
You can choose to install Raspberry Pi OS with desktop environment or without.
For the purpose of this project I recommend to install **Raspberry Pi OS Lite (64-bit)**, since we won't need the desktop environment.

## Custom Configuration
When proceeding to the next installation step, the Raspberry software will ask you whether to use a custom configuration. Choose to do so, since it will make things easier later.

Recommended settings:
* **Set a password** (recent OS versions don't have a default password)
* **Enable SSH**: Choose between "Use password authentication" and "Allow public-key authentication only"
* Choose a hostname: e.g. raspberrypi
* (Optionally) enter your Wi-Fi settings, in case you can't connect a network cable

# Configure the Raspberry Pi
Connect the Pi to your router with a network cable. Plug the USB printer into your Pi. Insert the Micro-SD card and turn the Raspberry on. It can take a minute until you can login:
{% highlight shell linenos %}ssh pi@raspberrypi{% endhighlight %}

First update the system:
{% highlight shell linenos %}
sudo apt update
sudo apt full-upgrade
{% endhighlight %}


# CUPS Configuration
Next we will need to set up the CUPS printing system.
Install CUPS:
{% highlight shell linenos %}sudo apt install cups{% endhighlight %}
Add your user to the *lpadmin* group:
{% highlight shell linenos %}sudo usermod -a -G lpadmin pi{% endhighlight %}
Enable the sharing of printers with your network:
{% highlight shell linenos %}cupsctl --share-printers{% endhighlight %}
Open a browser on your desktop PC and open the CUPS admin page (it might take a couple of seconds until the address can be resolved)
{% highlight shell linenos %}http://raspberrypi:631{% endhighlight %}

When you go to the administration page, it will ask you to switch to the actual IP address of your Pi for managing printers. Follow this request.

When choosing to add a printer, your printer should be shown. After proceeding you're asked to select a driver. In case no fitting driver is listed, you need to install the driver before being able to continue. If it's listed you can skip the driver section following.

## Install Printer Driver
Now install the appropriate printer drivers. In case of my Brother laser printer there are no ARM drivers available out of the box, so they need to be installed manually. Luckily there are open-source drivers available for my HL-L2310D printer, which can easily be installed:
{% highlight shell linenos %}sudo apt install printer-driver-brlaser{% endhighlight %}

## Add Printer to CUPS
Back in the CUPS admin page the device can now be selected. Choose to share this printer. Print a test page from within the CUPS web interface.

# Connect Clients
## Linux PC (EndevourOS)
On EndeavourOS (KDE) the printer can't be found (via GUI) out of the box. But there is a handy tool to the rescue. Install it as follows:
{% highlight shell linenos %}pacman -S system-config-printer{% endhighlight %}
Then launch the tool:
{% highlight shell linenos %}system-config-printer{% endhighlight %}
Follow the instructions, add the printer and that should be it!

## Linux PC (Bazzite)
While not discovered by the printer settings GUI, the easiest way I found was using a terminal command.
{% highlight shell linenos %}sudo lpadmin -p brother -E -v ipp://raspberrypi:631/printers/Brother_HL-L2310D_series -m everywhere{% endhighlight %}

## Windows PC
On Windows 10 the printer was recognized out of the box.

## Android
On Android 15 I had to manually add the printer:
Default Print Service -> Add printer
{% highlight shell linenos %}raspberrypi:631/printers/Brother_HL-L2310D_series{% endhighlight %}
The printer name you can find in the CUPS web interface. Afterwards I had to restart my phone in order to show the printer in the printer dialog.

## iOS and macOS
On Apple devices the printer was recognized automatically.
