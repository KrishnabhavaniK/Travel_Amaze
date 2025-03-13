from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth
from django.contrib import messages

# Create your views here.

def logout(request):
    auth.logout(request)
    return redirect("/")

def login(request):
    if request.method=="POST":
        username=request.POST['username']
        password=request.POST['password']
        user=auth.authenticate(username=username,password=password)
        if user is None:
            messages.info(request,"user not found")
            return redirect("/accounts/register")
        else:
            auth.login(request,user)
            print("user loggedin")
            return redirect("/")
    else:
        return render(request,"login.html")


def register(request):
    if request.method=='POST':
        username=request.POST['username']
        firstname=request.POST['firstname']
        lastname=request.POST['lastname']
        email=request.POST['email']
        password1=request.POST['password1']
        password2=request.POST['password2']
        if password1==password2:
            if User.objects.filter(username=username).exists():
                print("user already taken!")
                messages.info(request,"user already taken!!")
                return redirect('/accounts/register')
            else:
                if User.objects.filter(email=email).exists():
                    print('email taken!')
                    messages.info(request,"This email is already taken")
                    return redirect("/accounts/register")
                else:
                    user=User.objects.create_user(username=username,first_name=firstname,last_name=lastname,password=password1,email=email)
                    user.save();
            return redirect('/')
        else:
            print("password mismatch")
            messages.info("please check password")
            return redirect('/accounts/register')
    else:
        return render(request,'registration.html')