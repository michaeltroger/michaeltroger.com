---
published: true
---
### To make virtual providers work with your smartwatch

Unfortunately _Google_ does not - different to the _Android_ phone version - allow the adding of APN's manually in _Android Wear_ at the time of writing. This is a big problem because in many countries _MVNOs_ - so called _mobile virtual network operator_ operate. They don't have their own network but use existing infrastructure from other providers in order to provide mobile services. Also in Austria we have a lot of them and they are used by a lot of people. Some local examples are the providers _Hot_ (uses _T-Mobile's_ network), _Yesss_ (uses _A1'_ network) and _Spusu_ (uses _Drei's_ network). 

When inserting a virtual providers' SIM in your _Android Wear_ smartwatch, it will most likely not be able to connect to the network, due to the lack of a fitting APN. In this short blog post I want to show you how I was able to get my virtual provider's SIM working on my _Huawei Watch 2 4G_.

The follwing steps are involved:
- root the smartwatch
- add the APN via the _ADB_ shell

### Rooting the smartwatch
Yes, indeed! There is so far no option to do this without root! Check [xda-developers](https://forum.xda-developers.com/) if root is available for your smartwatch. In case of the _Huawei Watch 2_, luckily there is one. Follow the instructions from [this post](https://forum.xda-developers.com/watch-2/development/recovery-unofficial-twrp-3-1-0-0-touch-t3631364).

### Add the APN via the ADB shell
After rooting successfully we can add the provider via the _ADB_ shell. Assuming you have _ADB_ already installed after rooting, we continue without going into install instructions.
Run the _ADB_ shell by `adb shell`. Enter the root mode by entering `su`.

With `content query --uri content://telephony/carriers --where "name='yourprovider'"` you can now check whether an entry for your provider exists. Replace _yourprovider_ with your actual provider's name.

If it doesn't exist we can now add it via `content insert --uri content://telephony/carriers --bind name:s:"yourprovider" --bind numeric:s:"yourmccmns" --bind type:s:"default,sulp" --bind mcc:i:yourmcc --bind mnc:s:yourmns --bind apn:s:"yourapn" --bind user:s:"yourusername" --bind password:s:"yourpassword"`. Replace _yourprovider_ with the name of your provider - its the same name you will use to query the entry, _yourmccmns_ is your provider's MCC and MNS combined. You should be able to find both in the internet - if not then my advice is to enter the SIM in your phone, usually there you will have the APN configured so you can just check the data there! _yourmcc_ is the MCC only and _yourmns_ is the MNS only as discussed. Finally replace _yourapn_, _yourusername_ and _yourpassword_ with your provider's data. Check whether the APN was added succesfully by running the query from the paragraph before again. 

Finally put your smartwatch into airplane mode and disable it again. Voila! We have 4G working on the _Huawei Watch 2_with a _MVNO_!

Here the commands I used succesfully for the Austrian Provider spusu:
`content query --uri content://telephony/carriers --where "name='spusu'"` for checking whether the entry exists and `content insert --uri content://telephony/carriers --bind name:s:"spusu" --bind numeric:s:"23217" --bind type:s:"default,sulp" --bind mcc:i:232 --bind mnc:s:17 --bind apn:s:"mass.at" --bind user:s:"" --bind password:s:""` to add it.
