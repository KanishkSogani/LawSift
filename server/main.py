#import libraries and dependencies
import re
import json
from flask import Flask, request, jsonify
import pdfminer
from pdfminer.high_level import extract_pages, extract_text
import nltk
import collections
import re
import urllib.request
import io
import pdfplumber
import itertools
import re
from pdfminer.high_level import extract_text, extract_pages
from flask import Flask, request, jsonify
from os import linesep
# import fitz
import pandas as pd
from nltk.corpus import stopwords
from huggingface_hub import login
from transformers import pipeline
login(token="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")
summarizer = pipeline('summarization', model="facebook/bart-large-cnn")
qna_model = pipeline("question-answering", model = 'distilbert-base-cased-distilled-squad')
# if __name__ == '__main__':
#     text = extract_text("pdf1.pdf")

app = Flask(__name__)
#dependencies
# def pdf_getter(url:str):
#     '''
#     retrives pdf from url as bytes object
#     '''
#     open = urllib.request.urlopen(url).read()
#     return io.BytesIO(open)

# text  = extract_text("soda-pages-1.pdf")






def find_interest_rate(str): #returns the invoice interest rate
  index = str.find("at the rate of ")
  slen = len("at the rate of ")
  invoice_interest_str = str[index + slen : index + slen + 2]
  #Invoice_interest = (invoice_interest_str.replace(",", ""))
  #Invoice = int(Invoice_interest.replace(" ",""))
  return invoice_interest_str 

def invoice_interest_sw(rate): # classifies the interest rate into strength/weakness
  if int(rate) <= 24:
    return{"Strength" :  "as interest rate is equal or below 24% : (" + rate + ')'}
  else:
    return{"Weakness" : "as interest rate is above 24% : (" + rate + ')'}
def Find_Initial_Fee(str): # return the initial franchise fee 
  #input_str = extract_text(str)
  index = str.find("Initial Franchise Fee: ")
  slen = len("Initial Franchise Fee: ")
  ifee_str = str[index + slen : index + slen + 10]
  Initial_Fee = (ifee_str.replace(",", ""))
  Initial = int(Initial_Fee.replace(" ",""))
  return Initial 

def Initial_Fee_sw(Initial_fee): #classifies the initial fees as strength/weakness
  if Initial_fee <= 4000000:
    return{"Strength" : "as the Initial fee is below than or equal to 40,00,000 ("+ str(Initial_fee) + " )"}
  else: 
    return{"Weakness": "as the Initial fee is greater than 40,00,000 (" + str(Initial_fee) + ")"}
def Find_Adv_Fee_rate(str): # returns the advertisement fee rate 
  #input_str = extract_text(str)
  index = str.find("Advertising Fee Rate: ")
  slen = len("Advertising Fee Rate: ")
  Afee_str = str[index + slen : index + slen + 2]
  Advertising_Fee = (Afee_str.replace(",", ""))
  Adv = int(Advertising_Fee.replace(" ",""))
  return Adv
def Adv_Fee_rate_sw(Adv_rate):# classifies the ad fee rate as strength/weakness
  if Adv_rate <= 2:
    return("Strength:, as the Advertisement rate is below than or equal to 2 % (" + str(Adv_rate) + "% )")
  else: 
    return{"Weakness" : " as the Advertisement rate is greater than 2 % (" +  str(Adv_rate) + "  % )"}
def Find_Term(str): # returns the term of the agreement
  #input_str = extract_text(str)
  index = str.find("Term: ")
  slen = len("Term: ")
  Term_str = str[index + slen : index + slen + 2]
  Term = (Term_str.replace(",", ""))
  T= int(Term.replace(" ",""))
  return T
def Term_sw(Term):# classifies the ad fee rate as strength/weakness
  if Term >= 10:
    return{"Strength" : "as the term duration is more than or equal to 10 years ,"+ str(Term) + " years"}
  else: 
    return{"Weakness": " as the term duration is less than 10 years" + str(Term) + " Years"}
# def Initial_Train_Fee(str): # return the initial franchise fee 
#   #input_str = extract_text(str)
#   index = str.find("Initial Training Fee: ")
#   slen = len("Initial Training Fee: ")
#   initial_training_str = str[index + slen : index + slen + 10]
#   Training_Fee = (initial_training_str.replace(",", ""))
#   Training = int(Training_Fee.replace(" ",""))
#   return Training 

# def train_fee_sw(Tfee): #classifies the initial fees as strength/weakness
#   if int(Tfee) <= 50000:
#     return{"Strength" : "as the amount required to train is less than or equal to 50,000 rs :   ("+ str(Tfee) + " )"}
#   else: 
#     return{"Weakness": "as the amount required to train is more than 50,000 : (" + str(Tfee) + ")"}

# invoice_sw = invoice_interest_sw(find_interest_rate(text))
# initial_sw = Initial_Fee_sw(Find_Initial_Fee(text))
# adv_sw = Adv_Fee_rate_sw(Find_Adv_Fee_rate(text))
# term_sw = Term_sw(Find_Term(text))
def s_compiler(invoice_sw1, initial_sw1, adv_sw1, term_sw1):
   
   Strengths = [] 
   if "Strength" in invoice_sw1.keys():
      Strengths.append(invoice_sw1)
   if "Strength" in initial_sw1.keys():
      Strengths.append(initial_sw1)
   if "Strength" in adv_sw1.keys():
      Strengths.append(adv_sw1) 
   if "Strength" in term_sw1.keys():
      Strengths.append(term_sw1)
  #  if "Strength" in train_fee_sw1.keys():
  #     Strengths.append(train_fee_sw1)
   return Strengths 
def w_compiler(invoice_sw1, initial_sw1, adv_sw1, term_sw1):
   
   Weaknesses = [] 
   if "Weakness" in invoice_sw1.keys():
      Weaknesses.append(invoice_sw1)
   if "Weakness" in initial_sw1.keys():
      Weaknesses.append(initial_sw1)
   if "Weakness" in adv_sw1.keys():
      Weaknesses.append(adv_sw1) 
   if "Weakness" in term_sw1.keys():
      Weaknesses.append(term_sw1)
  #  if "Weakness" in train_fee_sw1.keys():
  #     Weaknesses.append(train_fee_sw1) 
   return Weaknesses 
   




missing_sections_impact = {'PARTIES': "following information missing: Includes the information about the parties involved"
, 'GRANT OF THE FRANCHISE': "Details the rights granted by the franchisor to the franchisee, including the right to operate a franchise business using the franchisor's trademarks, business systems, and intellectual property.",
                           'TRAINING': "Describes the training and support services provided by the franchisor to the franchisee, including initial training, ongoing support, and any additional assistance.",
                           'FEES PAYMENTS AND REPORTING OF SALES' : " Specifies the initial franchise fee and any other fees or costs that the franchisee must pay to the franchisor to acquire the franchise rights.",
                           'ADVERTISING' : "Specifies the franchisees obligations regarding advertising and marketing activities, including the requirement to contribute to advertising funds and comply with the franchisors brand standards.",
                           'OPERATIONS' : "References the operations manual provided by the franchisor, which contains detailed instructions and guidelines for operating the franchise business in accordance with the franchisor's standards",
                           'REPAIRS MAINTENANCE REFURBISHMENT AND REMODEL': " This section specifies which party is responsible for various types of maintenance and repairs. For instance, it may detail that the franchisee is responsible for day-to-day maintenance and minor repairs, while major repairs or structural issues are the responsibility of the franchisor or property owner.",
                           'PROPRIETARY MARKS' : "proprietary marks refer to the intellectual property owned by the franchisor that distinguishes the franchise brand from others in the marketplace", 'MAINTENANCE AND SUBMISSION OF BOOKS RECORDS AND REPORTS' : "", 'INSURANCE' : "Franchise insurance includes various types of coverage, such as general liability, property insurance, workers' compensation, cyber liability, employment practices liability, equipment Breakdown insurance covers, and business interruption insurance", 'TRANSFERS' : "covers the conditions and requirements for transferring ownership or control of the franchise business from one party (the franchisor or franchisee) to another.", 'DEFAULT AND REMEDIES' : "The Default and Remedies section of a franchise agreement outlines the actions that can be taken by either party in the event of a breach of contract or default", 'DISPUTE RESOLUTION' : "Dispute resolution clauses in franchise agreements provide a framework for resolving disagreements or conflicts that may arise between the franchisor and the franchisee. ", 'MISCELLANEOUS' : "includes all the information not convered under the other sections."}





#to create the chunks of the input_text
def chunk_maker(input_string, chunk_length):
    if len(input_string) <= chunk_length:
        return [input_string]

    # Calculate the number of chunks needed
    num_chunks = (len(input_string) + chunk_length - 1) // chunk_length

    # Create a list of chunks
    chunks = [input_string[i * chunk_length: (i + 1) * chunk_length] for i in range(num_chunks)]

    return chunks
#to generate the summary of the chunks, and combine to generate the final summary
def summary_generator(nested_sentences):
  summaries = []
  for i in nested_sentences:
    summaries.append(summarizer(i))
  return summaries
#to convert the final summary into a one long string
def dictionary_to_string(input_dict):
    # to convert a dictionary into a string
    result_string = ''.join(map(str, input_dict.values()))
    return result_string
def dicts_to_paragraphs(list_of_dicts):
    paragraphs = []
    for dictionary in list_of_dicts:
        for key, value in dictionary.items():
            paragraphs.append(f"{value}")
        paragraphs.append("")  # Add an empty line between each dictionary
    return '\n\n'.join(paragraphs)
def formater(summary):
  final_summarized = ""
  count = 1
  for i in summary:
      add_on = dicts_to_paragraphs(i)
      final_summarized += str(count) + ". " + add_on
      count += 1
  return final_summarized

def remove_numbers(string):
  return re.sub(r'\d+', '', string)

def remove_punctuations(string):
  no_punc = ""
  punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
  for char in string:
    if char not in punctuations:
      no_punc = no_punc + char
  return no_punc

def pdf_comparator(str):
  lines = str.splitlines()
  section_lines1 = []
  section_lines = []
  additional_sections = []
  missing_sections = []
  ideal_sections = ['PARTIES', 'GRANT OF THE FRANCHISE', 'TRAINING', 'FEES PAYMENTS AND REPORTING OF SALES', 'ADVERTISING', 'OPERATIONS', 'REPAIRS MAINTENANCE REFURBISHMENT AND REMODEL', 'PROPRIETARY MARKS', 'MAINTENANCE AND SUBMISSION OF BOOKS RECORDS AND REPORTS', 'INSURANCE', 'TRANSFERS', 'DEFAULT AND REMEDIES', 'DISPUTE RESOLUTION', 'MISCELLANEOUS']
  for line in lines:
    if 'SECTION' in line:
      section_lines1.append(line)
  for i in section_lines1:
    i = (remove_numbers(i))
    i = i.replace("SECTION", "")
    i = remove_punctuations(i)
    i = i.strip()
    section_lines.append(i)
  for i in section_lines:
    if i not in ideal_sections:
      additional_sections.append(i)
  for i in ideal_sections:
    if i not in section_lines:
      missing_sections.append(i)
  return [additional_sections, missing_sections]
#to join all the strings into one, using dictionary_to_string function
# chunk_set = chunk_maker(text,2500)#list of the chunks
# final_summary_dict = summary_generator(chunk_set)#summary in the form of a list(list(dictionary))
# #final_summary_string = ''#empty string for concatenation
# sorted_string= formater(final_summary_dict)
# print(sorted_string)
# doc = fitz.open("pdf1.pdf")
# print("information about your pdf: " , doc.metadata)
# for i in final_summary_dict:
#       add_on = dictionary_to_string(i[0])
#       final_summary_string += add_on
# print(final_summary_string)
texty =  ""

@app.route('/pdf', methods=['POST'])
def call():
   try:
      data = request.json
      print(data["pdfPath"])
      if __name__ == '__main__':
        text = extract_text(data["pdfPath"])
        texty = text
        chunk_set = chunk_maker(text,2000)#list of the chunks
        final_summary_dict = summary_generator(chunk_set)#summary in the form of a list(list(dictionary))
#final_summary_string = ''#empty string for concatenation
        sorted_string= formater(final_summary_dict)
        sorted_string = sorted_string.split(sep='\n')
        invoice_sw = invoice_interest_sw(find_interest_rate(text))
        initial_sw = Initial_Fee_sw(Find_Initial_Fee(text))
        adv_sw = Adv_Fee_rate_sw(Find_Adv_Fee_rate(text))
        term_sw = Term_sw(Find_Term(text))
        # train_sw = train_fee_sw(text)
        Strength = s_compiler(invoice_sw, initial_sw, adv_sw, term_sw)
        Weakness = w_compiler(invoice_sw, initial_sw, adv_sw, term_sw)
        strength_percentage = (len(Strength)/(len(Strength) +  len(Weakness))) * 100
        weakness_percentage= (len(Weakness)/(len(Strength) +  len(Weakness))) * 100
        additional_sections = pdf_comparator(text)[0]
        missing_sections = pdf_comparator(text)[1]
        missing_description = []
        for i in missing_sections:
          missing_description.append(missing_sections_impact[i])
        
        return jsonify({"summary" : sorted_string},{"Strength" : Strength},{"Weakness" : Weakness}, {"Strength_Percentage" : strength_percentage}, {"weakness_percentage" : weakness_percentage}, {"additional_sections" : additional_sections}, {"missing_sections" : missing_sections}, {"missing_sections_impact" : missing_description})

       

   except Exception as e :
       return jsonify({'error': str(e)}), 500


@app.route('/query', methods=['POST'])
def query():
   try:
      data = request.json
#       return qna_model
      return jsonify({"answer" : qna_model(data, context = texty) })
      
   except Exception as e:
      return jsonify({'error': str(e)}), 500
      

      


if __name__ == '__main__':
    app.run(debug=True, host="localhost", port=5000)


