# Embedded Software Lab 565040

## Motivation and context ##
This project contains the solutions of the lab tasks for the course "Embedded Software Lab (565040)". The goal of this project is to implement Layer 1 to Layer 4 of the [RaspNet protocol](https://osg.informatik.tu-chemnitz.de/lehre/emblab/protocol.pdf), a communication protocol for Raspberry Pi in a unidirectional token-ring infrastructure.

## Software architecture ##
![RaspNet implementation architecture](assets/architecture.png) 

## Hardware requirements ##
- Raspberry Pi B+
- Gertboard v2.0 with ATMega 328p microcontroller

## Environment setup ##
1. Connect Gertboard v2.0 with ATMega 328p to the Raspberry Pi B+ according to [Gertboard User Manual 2.0](https://www.farnell.com/datasheets/1683444.pdf)
2. Install the following tools in the Raspberry Pi
   + [avrdude 6.1](https://download.savannah.gnu.org/releases/avrdude/)
   + [avr-libc](https://www.nongnu.org/avr-libc/)
   + [doxygen](https://www.doxygen.nl/index.html)
   + [graphviz](https://graphviz.org/)
3. Edit **"/opt/avdude/etc/avrdude.conf"** according to the following
   + Uncomment the programmer definition having id **"linuxgpio"**
   + Set the properties: **reset=8, sck=11, mosi=10, miso=9.**
   + Save the file.
4. Clone this project

## How to use ##
### Build and execute source code ###
1. Open a terminal at the project's root directory.
2. Enter the following command to build the solution of a task and generate hex file. The build files will be written to the directory **"build/"**.
```
make lab=LAB_NUMBER task=TASK_NUMBER
```
3. Enter the following command to upload the hex code file to the Gertboard.
```
make upload
```
4. The code will start execution in the Gertboard with ATMega328p.
5. Optionally, to disable the debug messages, comment out the line **"src/debug.h:5"**.

### Interact with the program ###
The communication between Gertboard and Raspberry Pi is realized through UART. To interact with the program executing in the Gertboard, the following steps should be taken.
1. Execute any program by uploading the build files to the Gertboard. As an example, the solution of lab 4 task 5 contains all the features of the RaspNet protocol. To execute this program, enter the following commands.
```
make task=4 lab=5
make upload
```

2. Open a terminal and run minicom at 77 bps bandwidth to connect to the UART device. (**ama0**)
```
minicom -b 77 ama0
```
3. In the beginning, set the Raspnet layer 3 address, frequency (bps), and resend timeout (second). The following is an example where an address 120, frequency 1 bps, and timeout 1 second are set with commands **"A"**, **"F"**, and **"T"** respectively. The program will respond with **"OK"** for success and **"NOK"** for failure.
```
A120
>OK
F00001
>OK
T00001
>OK
```
4. The RaspNet protocol will initialize successfully when all the above 3 parameters are set.
5. To inquire if RaspNet is ready to accept data for transmission, the command **"S"** should be used. If the program responds with **"OK"**, it is ready to accept data from the Raspberry Pi. 
```
S
>OK
```
6. If **"OK"** was received from above step, the data can be sent from minicom terminal to the RaspNet for transmission using command **"P"**. The following is an example of the command to send a datagram message **"HELLO"** of length **5** to the destination address **120**. The RaspNet will reply with **"OK"** if it accepted the input. After transmitting the input frame completely, it will reply **"SUCCESS"** with the layer 4 id (0-255) of the packet.
```
P1-120-005-HELLO
>OK
...
>SUCCESS0
```
7. Similary, to send the above message as a non-datagram (with retransmission mechanism), the message should start with **P0** instead of **P1**.
```
P0-120-005-HELLO
```
8. When a message (e.g. **"HELLO"**) is received from another Raspberry Pi device, it will be displayed in the minicom terminal in the following way.
```
>R005HELLO
```


### Generate documentation ###
1. Open a terminal at the project's root directory.
2. Enter the following command to generate documentation with Doxygen.
```
make docs
```
3. The documentations will be generated at **"docs/html/"**
4. To view the documentation, open **"docs/html/index.html"** with the browser.
### Clean up ###
To remove all the generated build files and documentations, enter the following command.
```
make clean
```

## Maintainers ##
1. Minhaz Raufoon (original author)
