# Larry Liu

import string
global current
global songCreation
songCreation = 0

def possible3(fileName):
    file = open(fileName, 'r')
    lst = []

    for line in file:
        if not line.isspace():
            if line[0] == "[":
                current = line[1:-2]
            else:
                l = line.strip()
                if l[-1] == '\n':
                    l = l[:-1]
                exclude = set(string.punctuation)
                l = ''.join(ch for ch in l if ch not in exclude)
                words = l.split(" ")
                if len(words) >= 3:
                    for i in range(len(l.split(" ")) - 2):
                        str = words[i] + " " + words[i + 1] + " " + words[i + 2]
                        str1 = ""
                        for char in fileName:
                            if char == "_":
                                str1 += " "
                            elif char == ".":
                                break
                            else:
                                str1 += char
                        lst.append([str, current, str1])
    return lst

def writeOnFile(lst):
    global songCreation
    if songCreation == 0:
        f = open("combo.txt", "w+")
        songCreation += 1
    else:
        f = open("combo.txt", "a")
    for list in lst:
        count = 1
        for elem in list:
            if count < 3:
                f.write(elem + ", ")
                count += 1
            elif count == 3:
                f.write(elem + "\n")

def motifLook():
    f = open("combo.txt", "r")
    dict = {}
    whoSaid = (None, 0)
    for line in f:
        lst = line.split(", ")
        if lst[0] not in dict:
            dict[lst[0]] = 1

        else:
            dict[lst[0]] += 1
    finalLst = []
    for key in dict.keys():
        if dict[key] > 2:
            finalLst.append((key, dict[key]))
    counter = 0
    for elem in finalLst:
        print(elem)
        counter += 1
    print(counter)

def main():
    lst = []
    fileNames = ["A_Winter's_Ball.txt", "Aaron_Burr,_Sir.txt", "Alexander_Hamilton.txt", "Best_of_Wives_and_Best_of_Women.txt", "Blow_Us_All_Away.txt", "Burn.txt", "Cabinet_Battle_#1.txt", "Cabinet_Battle_#2.txt", "Dear_Theodosia.txt", "Farmer_Refuted.txt", "Guns_and_Ships.txt", "Helpless.txt", "History_Has_Its_Eyes_on_You.txt", "Hurricane.txt", "I_Know_Him.txt", "It's_Quiet_Uptown.txt", "Meet_Me_Inside.txt", "My_Shot.txt", "Non-Stop.txt", "One_Last_Time.txt", "Right_Hand_Man.txt", "Satisfied.txt", "Say_No_to_This.txt", "Schuyler_Defeated.txt", "Stay_Alive.txt", "Stay_Alive_(reprise).txt", "Take_a_Break.txt", "Ten_Duel_Commandments.txt", "That_Would_Be_Enough.txt", "The_Adams_Administration.txt", "The_Election_of_1800.txt", "The_Reynolds_Pamphlet.txt", "The_Room_Where_It_Happens.txt", "The_Schuyler_Sisters.txt", "The_Story_of_Tonight.txt", "The_Story_of_Tonight_(reprise).txt", "The_World_Was_Wide_Enough.txt", "Wait_for_It.txt", "Washington_on_Your_Side.txt", "We_Know.txt", "What'd_I_Miss.txt", "What_Comes_Next?.txt", "Who_Lives,_Who_Dies,_Who_Tells_Your_Story.txt", "Yorktown_(The_World_Turned_Upside_Down).txt", "You'll_Be_Back.txt", "Your_Obedient_Servant.txt"]
    for file in fileNames:
        lst += possible3(file)
    writeOnFile(lst)
    motifLook()

    '''sentinel = True
    while sentinel:
        response = input("Entry? (y/n) ")
        if response == "y":
            lst = possible3()
            writeOnFile(lst)
        elif response == "n":
            sentinel = False
    motifLook()
    '''
main()