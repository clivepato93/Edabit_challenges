album_dict = {
	2015: ("Vulnicura", "Honeymoon", "Rebel Heart"),
	2016: ("Lemonade", "Blackstar", "A Moon Shaped Pool"),
	2017: ("Flower Boy", "Antisocialites"),
	2018: ("El Mal Querer", "Someone Out There", "Cranberry", "Kamikaze"),
	2019: ("thank u next", "Magdalene", "Ode to Joy"),
	2020: ("Rough and Rowdy Ways", "folklore", "Future Nostalgia", "Colores")
}

def release_year(album):
    for year in album_dict:
        if album in album_dict[year]:
            return year
    return "Unknown"


print(release_year('Rebel Heart'), 2015, 'error')
# print(release_year('Someone Out There'), 2018, 'error')
# print(release_year('Where Wildness Grows'), 'Unknown', 'error')
# print(release_year('thank u next'), 2019, 'error')
# print(release_year(2017), 'Unknown', 'error')
# print(release_year('Flower Boy'), 2017, 'error')
# print(release_year('Kamikaze'), 2018, 'error')
# print(release_year('folklore'), 2020, 'error')
# print(release_year('Opal'), 'Unknown', 'error')
