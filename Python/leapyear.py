def leapyear():
    year = int(input("Insert Year: "))
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
        print("This year is leap")
    else:
        print("This year is not leap")
leapyear()
