//data for databases
const sampleListings = [{
    title: "Himgiri Boys Hostel",
    description: "Affordable hostel stay with WiFi, study tables, and attached bathrooms near colleges.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 6500,
    location: "Salt Lake, Kolkata",
    country: "India",
    category: ["Hostels", "Shared","Students","Budget","Furnished","Boys Only"]
},
{
    title: "Royal Stay PG",
    description: "Comfortable PG accommodation with meals and laundry facilities for all age groups.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 7200,
    location: "New Town, Kolkata",
    country: "India",
    category: ["Shared","Students","Couple","Parking","Furnished","PG"]
},
{
    title: "BlueNest Girls Hostel",
    description: "Safe girls hostel with furnished rooms, WiFi, and 24/7 security.",
    image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1733760124980-d9d16c12c6b4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 8000,
    location: "Garia, Kolkata",
    country: "India",
    category: ["Hostels", "Shared","Students","Budget","Girls Only","Furnished"]
},
{
    title: "MetroLiving Rooms",
    description: "Budget-friendly shared rooms near metro station with modern amenities.",
    image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/889312846/photo/white-plain-bunk-bed-in-dormitory.jpg?s=1024x1024&w=is&k=20&c=ir1CpZaf4yXSgDAfO7iVuOloCZPXKqKttisDwpJRB7k="
    },
    price: 5500,
    location: "Dumdum, Kolkata",
    country: "India",
    category: ["Pet","Couple","Parking"]
},
{
    title: "Shanti Niketan Stay",
    description: "Peaceful stay option with spacious rooms and nearby transport connectivity.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1721743169043-dda0212ce3d4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 6000,
    location: "Rajarhat, Kolkata",
    country: "India",
    category: ["Pet","Furnished"]
},
{
    title: "GreenLeaf Residency",
    description: "Affordable PG with clean rooms, high-speed WiFi, and daily housekeeping.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 7000,
    location: "Howrah, Kolkata",
    country: "India",
    category: ["Pet","Couple","Parking","Furnished"]
},
{
    title: "UrbanNest Hostel",
    description: "Modern student hostel with study areas and fully furnished rooms.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1636917754428-60ece5e521df?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 7500,
    location: "Bidhannagar, Kolkata",
    country: "India",
    category: ["Hostels","Furnished","Shared","Budget"]
},
{
    title: "Elite Corner PG",
    description: "Comfortable PG stay with AC rooms and meal facilities included.",
    image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1724788724847-6d5da3271b80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 9000,
    location: "Park Street, Kolkata",
    country: "India",
    category: ["PG","Furnished","Furnished"]
},
{
    title: "Sunrise Living Spaces",
    description: "Affordable co-living rooms for interns and working professionals.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1463620910506-d0458143143e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 6800,
    location: "Sector V, Kolkata",
    country: "India",
    category: ["Shared","Parking","Furnished"]
},
{
    title: "Annapurna PG",
    description: "Simple and affordable PG with homemade meals and WiFi access.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 5000,
    location: "Tollygunge, Kolkata",
    country: "India",
    category: ["PG","Girls Only","Budget","Furnished","Shared"]
},
{
    title: "CityNest Rooms",
    description: "Well-furnished rental rooms near office and college hubs.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1530334580314-1e7a340426a0?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 8200,
    location: "Esplanade, Kolkata",
    country: "India",
    category: ["Pet","Couple","Parking","Furnished"]
},
{
    title: "Friends Hostel & Stay",
    description: "Affordable shared hostel stay with common kitchen and study area.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552189864-e05b02af1697?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 4800,
    location: "Jadavpur, Kolkata",
    country: "India",
    category: ["Hostels","Furnished"]
},
{
    title: "ComfortHub Residency",
    description: "Comfortable single and shared rooms with modern facilities.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571474039046-42bc4e7f4b98?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 7600,
    location: "Behala, Kolkata",
    country: "India",
    category: ["Pet","Shared","Couple","Parking","Furnished"]
},
{
    title: "DreamNest PG",
    description: "Clean and spacious PG stay suitable for students and interns.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 6400,
    location: "Ultadanga, Kolkata",
    country: "India",
    category: ["PG","Shared","Furnished"]
}];

module.exports = { data: sampleListings };

