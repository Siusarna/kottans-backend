# kottans-backend
It's good opportunity to learn git very quickly
## Unix Shell
![Screenshoot](task_unix_shell/ss.png)
I am so happy to be able to remember all commands that I have been learning since I have entered the university.
I have discovered bash scripts and realized that scripts make work  with OS easier

## Git Collaboration
![Screenshoot1](task_git_collaboration/ss1.png)
![Screenshoot2](task_git_collaboration/ss2.png)
This course refresh my knowledge of Git.
Also I learn few features and believe that this git commands will save my life somewhere

## NodeJS Basics 1
![Screenshoot1](node_basic_1/ss1.png)
![Screenshoot2](node_basic_1/ss2.png)
![Screenshoot3](node_basic_1/ss3.jpg)
This course refresh my knowledge of basic node.js;
Also I learn more about stream in js and functional programing

## Memory Management

`What's going to happen if program reaches maximum limit of stack ?`
If the maximum stack size has been reached, we have a stack overflow and the program receives a Segmentation Fault.
`What's going to happen if program requests a big (more then 128KB) memory allocation on heap ?`
The heap is enlarged via the brk() system call (implementation) to make room for the requested block.
`What's the difference between Text and Data memory segments ?`
The data segment holds the contents for static variables initialized in source code. The string lives in the text segment, which is read-only and stores all of your code in addition to tidbits like string literals.

```55b6a8299000-55b6a82c6000 r--p 00000000 08:06 2228320                    /usr/bin/bash
55b6a82c6000-55b6a8374000 r-xp 0002d000 08:06 2228320                    /usr/bin/bash
55b6a8374000-55b6a83aa000 r--p 000db000 08:06 2228320                    /usr/bin/bash
55b6a83aa000-55b6a83ae000 r--p 00110000 08:06 2228320                    /usr/bin/bash
55b6a83ae000-55b6a83b7000 rw-p 00114000 08:06 2228320                    /usr/bin/bash
55b6a83b7000-55b6a83c1000 rw-p 00000000 00:00 0
55b6a962c000-55b6a9776000 rw-p 00000000 00:00 0                          [heap]
7f07fa314000-7f07fa317000 r--p 00000000 08:06 2236802                    /usr/lib/x86_64-linux-gnu/libnss_files-2.29.so
7f07fa317000-7f07fa31e000 r-xp 00003000 08:06 2236802                    /usr/lib/x86_64-linux-gnu/libnss_files-2.29.so
7f07fa31e000-7f07fa320000 r--p 0000a000 08:06 2236802                    /usr/lib/x86_64-linux-gnu/libnss_files-2.29.so
7f07fa320000-7f07fa321000 r--p 0000b000 08:06 2236802                    /usr/lib/x86_64-linux-gnu/libnss_files-2.29.so
7f07fa321000-7f07fa322000 rw-p 0000c000 08:06 2236802                    /usr/lib/x86_64-linux-gnu/libnss_files-2.29.so
7f07fa322000-7f07fa328000 rw-p 00000000 00:00 0
7f07fa33f000-7f07fb3db000 r--p 00000000 08:06 2235371                    /usr/lib/locale/locale-archive
7f07fb3db000-7f07fb3de000 rw-p 00000000 00:00 0
7f07fb3de000-7f07fb403000 r--p 00000000 08:06 2236055                    /usr/lib/x86_64-linux-gnu/libc-2.29.so
7f07fb403000-7f07fb576000 r-xp 00025000 08:06 2236055                    /usr/lib/x86_64-linux-gnu/libc-2.29.so
7f07fb576000-7f07fb5bf000 r--p 00198000 08:06 2236055                    /usr/lib/x86_64-linux-gnu/libc-2.29.so
7f07fb5bf000-7f07fb5c2000 r--p 001e0000 08:06 2236055                    /usr/lib/x86_64-linux-gnu/libc-2.29.so
7f07fb5c2000-7f07fb5c5000 rw-p 001e3000 08:06 2236055                    /usr/lib/x86_64-linux-gnu/libc-2.29.so
7f07fb5c5000-7f07fb5c9000 rw-p 00000000 00:00 0
7f07fb5c9000-7f07fb5ca000 r--p 00000000 08:06 2236192                    /usr/lib/x86_64-linux-gnu/libdl-2.29.so
7f07fb5ca000-7f07fb5cc000 r-xp 00001000 08:06 2236192                    /usr/lib/x86_64-linux-gnu/libdl-2.29.so
7f07fb5cc000-7f07fb5cd000 r--p 00003000 08:06 2236192                    /usr/lib/x86_64-linux-gnu/libdl-2.29.so
7f07fb5cd000-7f07fb5ce000 r--p 00003000 08:06 2236192                    /usr/lib/x86_64-linux-gnu/libdl-2.29.so
7f07fb5ce000-7f07fb5cf000 rw-p 00004000 08:06 2236192                    /usr/lib/x86_64-linux-gnu/libdl-2.29.so
7f07fb5cf000-7f07fb5dd000 r--p 00000000 08:06 2237150                    /usr/lib/x86_64-linux-gnu/libtinfo.so.6.1
7f07fb5dd000-7f07fb5eb000 r-xp 0000e000 08:06 2237150                    /usr/lib/x86_64-linux-gnu/libtinfo.so.6.1
7f07fb5eb000-7f07fb5f8000 r--p 0001c000 08:06 2237150                    /usr/lib/x86_64-linux-gnu/libtinfo.so.6.1
7f07fb5f8000-7f07fb5fc000 r--p 00028000 08:06 2237150                    /usr/lib/x86_64-linux-gnu/libtinfo.so.6.1
7f07fb5fc000-7f07fb5fd000 rw-p 0002c000 08:06 2237150                    /usr/lib/x86_64-linux-gnu/libtinfo.so.6.1
7f07fb5fd000-7f07fb5ff000 rw-p 00000000 00:00 0
7f07fb60f000-7f07fb616000 r--s 00000000 08:06 2884993                    /usr/lib/x86_64-linux-gnu/gconv/gconv-modules.cache
7f07fb616000-7f07fb617000 r--p 00000000 08:06 2235835                    /usr/lib/x86_64-linux-gnu/ld-2.29.so
7f07fb617000-7f07fb638000 r-xp 00001000 08:06 2235835                    /usr/lib/x86_64-linux-gnu/ld-2.29.so
7f07fb638000-7f07fb640000 r--p 00022000 08:06 2235835                    /usr/lib/x86_64-linux-gnu/ld-2.29.so
7f07fb640000-7f07fb641000 r--p 00029000 08:06 2235835                    /usr/lib/x86_64-linux-gnu/ld-2.29.so
7f07fb641000-7f07fb642000 rw-p 0002a000 08:06 2235835                    /usr/lib/x86_64-linux-gnu/ld-2.29.so
7f07fb642000-7f07fb643000 rw-p 00000000 00:00 0
7ffe7b3e2000-7ffe7b403000 rw-p 00000000 00:00 0                          [stack]
7ffe7b572000-7ffe7b575000 r--p 00000000 00:00 0                          [vvar]
7ffe7b575000-7ffe7b576000 r-xp 00000000 00:00 0                          [vdso]
ffffffffff600000-ffffffffff601000 r-xp 00000000 00:00 0                  [vsyscall]
```

Heap - 55b6a962c000-55b6a9776000

Stack - 7ffe7b3e2000-7ffe7b403000

MMS - 7f07fa317000-7f07fa31e000

This subtasks open for me anatomy of a program in memory, its was hard but I understood stack, heap, garbage collector.

## Http & Https

Requests:
<li> curl https://api.github.com/users/Siusarna
<li> curl -i https://api.github.com/users/Siusarna
<li> curl https://api.github.com/gists/starred
<li> curl --user "Siusarna:BLABLABLA" https://api.github.com/gists/starred
<li> curl --user "Siusarna:*****" https://api.github.com/gists/starred
<li> curl --user "Siusarna" https://api.github.com/gists/starred
<li> curl -i https://api.github.com/orgs/kottans/repos
<li> curl -H 'Authorization: *******' https://api.github.com/repos/Siusarna/kottans-backend/issues -d '{"title": "Test Issue"}'

1. Name at least three possible negative consequences of not using https.
    I.There is a danger that the person in the middle reads and changes the data
    II. A non-certified server may imitate another website
    III. Our website may be blocked by a browser
2. Explain the main idea behind public key cryptography in few sentences.
     You can decrypted message, that was enncrypted by a public key before, only with the corresponding private key. Neither key can perform both functions by itself. The private key must not be revealed to anyone who isn’t authorized to decrypt messages, but  The public key can be published without compromising the security of the system.
3. You are creating and application for pet clinic. You need to implement the following functionality

    I. Add new pet:
        • POST;
        • body: name, age, breed, owner's name, medical history;
        • Status code: 204;

    II. Search pet by name:
        • Get
        • body: name
        • Status code: 200;

    III. Change name of an existing pet:
        • Put
        • body: name
        • Status code: 204;

    IV. Add new info about pet's health:
        • Put
        • body: new info
        • Status code: 204;

    V. Assign a pet to a particular doctor in the clinic:
        • Put
        • body: doctor_id
        • Status code: 200;

    VI. Register an appointment for a pet. This request should include info about pet, doctor and appointment date and time.
        • POST
        • Body: info about pet, doctor and appointment date and time
        • Status code: 200;

## File System
[secret.txt](file_system/secret.txt)

[task.js](file_system/file_system_task.js)

## TCP. UDP. Network

![Screenshoot1](task_networks/ss1.png)
![Screenshoot2](task_networks/ss2.jpg)

I really liked course abou how internet works. I imagined the whole picture of how the internet works
Reviewed and approved by @AMashoshyna

## Data-structures

Really cool links to information and tasks with data structures and http
[index.js](data-structures/index.js)
Reviewed and approved by @zonzujiro