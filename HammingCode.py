print("Python program to calculate Hamming distance between two numbers")
count = 0
i = 0
def decimalToBinary(n):  
    return bin(n)[2:]
try:
    v1 = int(input("Enter the first value in decimal:"))
    v2 = int(input("Enter the second value in decimal:"))
    val1=decimalToBinary(v1)
    val2=decimalToBinary(v2)
    zeros=abs(len(val1)-len(val2))
    print(zeros)
    if(len(val1)>len(val2)):
        val2=zeros*'0'+val2
    else:
        val1=zeros*'0'+val1
    var1=str(val1)
    var2=str(val2)
    print("The binary values of two numbers",v1,"and",v2,"is:",var1,'and',var2)
    while i < len(var1):
        if var1[i] is not var2[i]:
            count+=1
            i += 1
        else:
            i += 1
            continue
    print("The Hamming distance is:", count)
except:
    print("Please enter the correct value!!")