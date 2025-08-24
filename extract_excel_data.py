#!/usr/bin/env python3
import pandas as pd
import json
import sys

def extract_excel_data(filename):
    try:
        # Read all sheets from the Excel file
        xl_file = pd.ExcelFile(filename)
        
        data = {}
        
        # Process each sheet
        for sheet_name in xl_file.sheet_names:
            print(f"Processing sheet: {sheet_name}")
            df = pd.read_excel(filename, sheet_name=sheet_name)
            
            # Convert to dict and handle NaN values
            sheet_data = df.fillna('').to_dict('records')
            data[sheet_name] = sheet_data
            
            # Print first few rows to understand structure
            print(f"Columns in {sheet_name}: {list(df.columns)}")
            if len(sheet_data) > 0:
                print(f"First row: {sheet_data[0]}")
            print("-" * 50)
        
        # Save to JSON for easier processing
        with open('excel_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print("Data extracted successfully to excel_data.json")
        return data
        
    except Exception as e:
        print(f"Error reading Excel file: {e}")
        return None

if __name__ == "__main__":
    extract_excel_data("incubation_cia_data.xlsx")
