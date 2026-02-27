export async function searchAddresses(query) {
    const q = query.trim();
    if (!q) return [];

    const url =
        "https://nominatim.openstreetmap.org/search?format=json&limit=5&q=" +
        encodeURIComponent(q);

    const res = await fetch(url, {
        headers: {
            "Accept-Language": "en",
        },
    });

    if (!res.ok) throw new Error("Failed to fetch address suggestions");

    const data = await res.json();

    return data.map((item) => ({
        label: item.display_name,
        lat: item.lat,
        lon: item.lon,
    }));
}