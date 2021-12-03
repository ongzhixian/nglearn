# Can I Fly? Travel Recommendation App

## Target Consumers
	Anyone located in Singapore (Yeah, we don't care about people staying elsewhere)
	Note: 	`Anyone` here can be locals or expats (students, tourists, business, workers); 
			We want to narrowing down the scope of origin of travel to Singapore to reduce app complexity.

## Use cases
	Exploration:    I want to know where can I go (their severity levels, restrictions).
	                I want to know where can I go without doing certain tests.
	Info Seeking:   I want to know retrictions at target country.
    

## Application Flow
												/intro
Questionaire

1.	Are you travelling alone? Yes=>2a;No=>2b	/travel-alone

2a.	What is your Singapore residency status?	/status-check
	What is your vaccination status?
	
2b.	(For each individual)
	Companion's name? c1
	What is your companion's Singapore residency status?
	What is your companion's vaccination status?
	
2a=>3,2b=>3
												/has-destination
3.	Do you have a specific destination? Yes=>4;No=>5
4.	Search country	=> CountryRestriction
5.	Enter filters 	=> CountriesByRestrictions




# Reference

https://safetravel.ica.gov.sg/arriving/overview#selfhelptool

Can grab from:
https://www.checkfirst.gov.sg/api/v1/c/747b8567-273f-4193-a46e-fa1d06f47c16
