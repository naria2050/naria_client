export const fetchFlightData = async () => {
    try {
        const response = await fetch('https://flightkiya.cosmelic.com/api/b2c/search', {
            method: 'POST', // Use POST method
            headers: {
                'Content-Type': 'application/json', // Specify the content type
            },
            body: JSON.stringify({ // Convert body to JSON string
                "OriginDestinationInformations": [
                    {
                        "DepartureDateTime": "2025-02-03T00:00:00",
                        "OriginLocationCode": "BLR",
                        "DestinationLocationCode": "DXB"
                    }
                ],
                "TravelPreferences": {
                    "AirTripType": "OneWay"
                },
                "PricingSourceType": "Public",
                "PassengerTypeQuantities": [
                    {
                        "Code": "ADT",
                        "Quantity": 1
                    }
                ],
                "RequestOptions": "Fifty"
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const flightData = await response.json();
        console.log(flightData); // Log the response data
    } catch (error) {
        console.error('Error fetching flight data:', error);
    }
};

fetchFlightData();
