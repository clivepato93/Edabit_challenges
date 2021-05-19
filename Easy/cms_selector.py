def cms_selector(lst, txt):
    f = []
    for word in lst:
        if txt.lower() in word or txt.upper() in word:
            f.append(word)
    return sorted(f)



print(cms_selector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "er"), ["Blogger"])
print(cms_selector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "o"), ["Blogger", "Joomla", "Magento", "Shopify", "WordPress"])
print(cms_selector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], ""), ["Blogger", "Drupal", "Joomla", "Magento", "Shopify", "WordPress"])
print(cms_selector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "JO"), [])
