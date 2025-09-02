def divide_numbers():
    try:
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))
        result = num1 / num2
    except ZeroDivisionError:
        print("Error: Division by zero is not allowed.")
    else:
        print(f"The result is: {result}")

divide_numbers()