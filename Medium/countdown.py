# https://edabit.com/challenge/7QvH8PJgQ5x4qNGLh
def countdown(n, txt):
    seq=[str(i) for i in range(n,0,-1)]
    return ". ".join(seq)+"."+" {}!".format(txt.upper())



print(countdown(30, "fire"), "30. 29. 28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. FIRE!")
print(countdown(28, "watch out"), "28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!")
print(countdown(26, "fire"), "26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. FIRE!")
print(countdown(12, "take down"), "12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!")
print(countdown(19, "boom"), "19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!")
print(countdown(30, "shoot"), "30. 29. 28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!")
print(countdown(13, "fire"), "13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. FIRE!")
print(countdown(19, "blast off"), "19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!")
print(countdown(17, "take down"), "17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!")
print(countdown(1, "watch out"), "1. WATCH OUT!")
print(countdown(9, "shoot"), "9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!")
print(countdown(22, "take down"), "22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!")
print(countdown(4, "fire"), "4. 3. 2. 1. FIRE!")
print(countdown(7, "shoot"), "7. 6. 5. 4. 3. 2. 1. SHOOT!")
print(countdown(19, "blast off"), "19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!")
print(countdown(6, "go"), "6. 5. 4. 3. 2. 1. GO!")
print(countdown(20, "boom"), "20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!")
print(countdown(12, "boom"), "12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!")
print(countdown(20, "boom"), "20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!")
print(countdown(27, "take down"), "27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!")
print(countdown(6, "blast off"), "6. 5. 4. 3. 2. 1. BLAST OFF!")
print(countdown(6, "shoot"), "6. 5. 4. 3. 2. 1. SHOOT!")
print(countdown(19, "blast off"), "19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!")
print(countdown(15, "watch out"), "15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!")
print(countdown(4, "blast off"), "4. 3. 2. 1. BLAST OFF!")
print(countdown(21, "go"), "21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. GO!")
print(countdown(5, "bang"), "5. 4. 3. 2. 1. BANG!")
