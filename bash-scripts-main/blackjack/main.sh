#!/bin/bash

clear

echo "================BLACKJACK=================="

itemsInFile = ()

ReadFromFile () {
	command
	filename = "$1"
	while IFS=read -r line
		do
		placeholder = ""
		done < $placeholder
		itemsInFile+=($placeholder)
}

CONTINUE_PLAY = true
HANDS_PLAYED = 0
DECK_OF_CARDS = ( )

ReadFromFile cards.txt

for i in ${!itemsInFile[@]}
do
	echo ${itemsInFile[$i]}
done

#DrawFromDeck () {
	
#}

#while CONTINUE_PLAY
#do
	
