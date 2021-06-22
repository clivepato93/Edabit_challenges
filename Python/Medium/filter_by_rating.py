def filter_by_rating(d, rating):
    a= {k:v for k,v in d.items() if v==rating}
    return a if a else 'No results found'


print(filter_by_rating({"Brand A": "*", "Brand B": "*****", "Brand C": "*", "Brand D": "**", "Brand E": "****", "Brand F": "*****", "Brand G": "****", "Brand H": "****", "Brand I": "*****", "Brand K": "***", "Brand L": "*****", "Brand M": "***", "Brand N": "*", "Brand O": "***", "Brand P": "*****", "Brand Q": "**", "Brand R": "****"}, "***"), {"Brand K": "***", "Brand M": "***", "Brand O": "***"})
print(filter_by_rating({"Brand A": "*", "Brand B": "***", "Brand C": "**", "Brand D": "*****", "Brand E": "*", "Brand F": "****", "Brand G": "*****", "Brand H": "*****", "Brand I": "**", "Brand K": "*", "Brand L": "*", "Brand M": "***", "Brand N": "*", "Brand O": "*", "Brand P": "**", "Brand Q": "**", "Brand R": "****", "Brand S": "****", "Brand T": "**", "Brand U": "*", "Brand V": "*", "Brand W": "*", "Brand X": "***", "Brand Y": "*****", "Brand Z": "****"}, "**"), {"Brand C": "**", "Brand I": "**", "Brand P": "**", "Brand Q": "**", "Brand T": "**"})
