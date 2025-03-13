from django.shortcuts import render
from .models import Destination
from django.contrib.auth.decorators import login_required
from .models import SavedDestination
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt  # Remove in production
@login_required
def save_destination(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            destination_name = data.get("destination_name")
            destination_url = data.get("destination_url")

            print("🔹 Received data:", data)  # Debugging
            print("🔹 Destination Name:", destination_name)  # Debugging
            print("🔹 Destination URL:", destination_url)  # Debugging

            if destination_name and destination_url:
                SavedDestination.objects.create(
                    user=request.user,
                    destination_name=destination_name,
                    destination_url=destination_url
                )
                print("✅ Destination saved successfully!")
                return JsonResponse({"message": "Destination saved successfully!"})

        except json.JSONDecodeError:
            print("❌ Invalid JSON data received!")  # Debugging
            return JsonResponse({"error": "Invalid JSON data"}, status=400)

    print("❌ Invalid request method!")
    return JsonResponse({"error": "Invalid request"}, status=400)
    
def profile(request):
    destinations = SavedDestination.objects.filter(user=request.user)  # Fetch destinations for logged-in user
    return render(request, "profile.html", {"destinations": destinations})

@csrf_exempt  # Allows AJAX requests
@login_required  # Ensures only logged-in users can delete their destinations
def delete_destination(request):
    if request.method == "POST":
        destination_id = request.POST.get("id")

        try:
            destination = SavedDestination.objects.get(id=destination_id, user=request.user)
            destination.delete()
            return JsonResponse({"status": "success", "message": "Destination deleted!"})
        except SavedDestination.DoesNotExist:
            return JsonResponse({"status": "error", "message": "Destination not found or unauthorized!"}, status=404)

    return JsonResponse({"status": "error", "message": "Invalid request"}, status=400)

def index(request):
    # featured_destinations = [
    #     {"name": "Taj Mahal", "image": "static/images/Taj Mahal.jpg", "location": "Agra, India", "listings": 503},
    #     {"name": "Jaipur Pink City", "image": "static/images/jaipur.jpg", "location": "Rajasthan, India", "listings": 175},
    #     {"name": "Leh-Ladakh", "image": "static/images/Ladakh.jpg", "location": "Ladakh, India", "listings": 268},
    #     {"name": "Kerala Backwaters", "image": "static/images/kerala.jpeg", "location": "Kerala, India", "listings": 195},
    #     {"name": "Varanasi Ghats", "image": "static/images/varanasi.jpeg", "location": "Uttar Pradesh, India", "listings": 310},
    #     {"name": "Goa Beaches", "image": "static/images/goa.jpeg", "location": "Goa, India", "listings": 428},
    #     {"name": "Udaipur", "image": "static/images/Udaipur.webp", "location": "Rajasthan, India", "listings": 245},
    # ]
    featured_destinations = Destination.objects.all() 
    return render(request, 'index.html', {"featured_destinations": featured_destinations})

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def service(request):
    destinations = [
    {
        "name": "Taj Mahal, Agra",
        "image_url": "images/tajmahal.jpeg",
        "rating": int(9.5),
        "description": "Experience the magnificent symbol of eternal love and architectural marvel.",
        "location": "Agra, Uttar Pradesh",
        "slug": "taj-mahal"
    },
    {
        "name": "Kerala Backwaters",
        "image_url": "images/Kerala Backwaters.jpg",
        "rating": int(9.2),
        "description": "Cruise through serene backwaters in traditional houseboats.",
        "location": "Alleppey, Kerala",
        "slug": "kerala"
    },
    {
        "name": "Rajasthan",
        "image_url": "images/Rajasthan.jpg",
        "rating": int(9.0),
        "description": "Experience the royal heritage of magnificent palaces and forts.",
        "location": "Jaipur, Rajasthan",
        "slug": "rajasthan"
    },
    {
        "name": "Goa Beach Paradise",
        "image_url": "images/Goa.jpg",
        "rating": int(9.3),
        "description": "Experience the perfect blend of beaches, culture, and nightlife.",
        "location": "North Goa",
        "slug": "goa"
    },
    {
        "name": "Ladakh Adventure",
        "image_url": "images/Ladakh.jpg",
        "rating": int(9.4),
        "description": "Explore the breathtaking landscapes of the Himalayan desert.",
        "location": "Leh, Ladakh",
        "slug": "ladakh"
    },
    {
        "name": "Mysore Palace",
        "image_url": "images/Mysore Palace.jpg",
        "rating": int(9.1),
        "description": "Visit the magnificent Mysore Palace and experience royal heritage.",
        "location": "Mysore, Karnataka",
        "slug": "mysore"
    },
    {
        "name": "Darjeeling Hills",
        "image_url": "images/Darjeeling.jpg",
        "rating": int(8.9),
        "description": "Explore tea gardens and enjoy the scenic beauty of the Himalayas.",
        "location": "Darjeeling, West Bengal",
        "slug": "darjeeling"
    },
    {
        "name": "Ancient Hampi",
        "image_url": "images/Hampi.jpg",
        "rating": int(9.4),
        "description": "Explore the magnificent ruins of the Vijayanagara Empire.",
        "location": "Karnataka",
        "slug": "hampi"
    },
    {
        "name": "Ooty Hill Station",
        "image_url": "images/Ooty.jpg",
        "rating": int(9.2),
        "description": "Experience the Queen of Hill Stations in the Nilgiris.",
        "location": "Tamil Nadu",
        "slug": "ooty"
    },
    {
        "name": "Shimla Heritage",
        "image_url": "images/Shimla.jpg",
        "rating": int(9.3),
        "description": "Experience the colonial charm of India's favorite hill station.",
        "location": "Himachal Pradesh",
        "slug": "shimla"
    },
    {
        "name": "Sundarbans Safari",
        "image_url": "images/Sundarbans.jpg",
        "rating": int(9.1),
        "description": "Explore the world's largest mangrove forest and spot Royal Bengal Tigers.",
        "location": "West Bengal",
        "slug": "sundarbans"
    },
    {
        "name": "Historic Hyderabad",
        "image_url": "images/Charminar.jpg",
        "rating": int(9.2),
        "description": "Explore the Pearl City's rich history and culture.",
        "location": "Hyderabad, Telangana",
        "slug": "hyderabad"
    },
    {
        "name": "Araku Valley",
        "image_url": "images/Araku.jpg",
        "rating": int(8.8),
        "description": "Experience coffee plantations and tribal culture in a scenic valley.",
        "location": "Araku Valley, Andhra Pradesh",
        "slug": "araku"
    },
    {
        "name": "Mumbai Gateway",
        "image_url": "images/Gateway.jpg",
        "rating": int(9.4),
        "description": "Experience the iconic Gateway of India and vibrant Mumbai life.",
        "location": "Mumbai, Maharashtra",
        "slug": "mumbai"
    },
    {
        "name": "Delhi Heritage",
        "image_url": "images/delhi.jpeg",
        "rating": int(9.3),
        "description": "Visit India Gate and explore the heart of the nation's capital.",
        "location": "New Delhi, Delhi",
        "slug": "delhi"
    }
]
    search_query = request.GET.get('search', '')  # Get search input from URL
    filtered_destinations = []

    if search_query:
        # Filter destinations based on search query (case insensitive)
        filtered_destinations = [dest for dest in destinations if search_query.lower() in dest["name"].lower()]

        # If no matching destination is found, return a message
        if not filtered_destinations:
            return render(request, 'service.html', {
                'destinations': destinations,  # Show all destinations
                'search_query': search_query,
                'not_found': True
            })

    else:
        filtered_destinations = destinations  # Show all if no search

    return render(request, 'service.html', {
        'destinations': filtered_destinations,
        'search_query': search_query
    })

    # return render(request, 'service.html', {'destinations': destinations})

@login_required(login_url='/accounts/login/')
def destination_detail(request, slug):
    """Render the correct destination HTML file based on slug."""
    template_name = f"destinations/{slug}.html"
    return render(request, template_name)
