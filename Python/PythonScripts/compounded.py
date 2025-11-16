initialSilver=3330
initialGold=366
initialRealEstate=0
initialStocks=9500
initialBonds=0
rateSilver=0.049
rateGold=0.072
rateRealEstate=0.049
rateStocks=0.084
rateBonds=0.045
contSilver=570
contGold=1425
contRealEstate=7695
contStocks=15675
contBonds=3135
runningSilver=initialSilver
runningGold=initialGold
runningRealEstate=initialRealEstate
runningStocks=initialStocks
runningBonds=initialBonds

count = 2024
for i in range(40):
    runningSilver+=(runningSilver*(1+rateSilver))
    runningGold+=(runningGold*(1+rateGold))
    runningRealEstate+=(runningRealEstate*(1+rateRealEstate))
    runningStocks+=(runningStocks*(1+rateStocks))
    runningBonds+=(runningBonds*(1+rateBonds))
    print(str(count))
    print("$"+str(runningSilver))
    print("$"+str(runningGold))
    print("$"+str(runningRealEstate))
    print("$"+str(runningStocks))
    print("$"+str(runningBonds))
    print("===========================")
    count+=1