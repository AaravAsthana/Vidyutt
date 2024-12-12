import os
import pandas as pd

# Define the folder containing the Excel files
input_folder = os.path.join(os.getcwd(), "Cumulative")  # Automatically use the script's directory
output_file = os.path.join(os.getcwd(), "final_output.xlsx")  # Save output in the same folder

# Initialize a list to collect all extracted data
combined_data = []

# Iterate through all Excel files in the folder
for file_name in os.listdir(input_folder):
    if file_name.endswith(".xlsx"):  # Check for Excel files
        file_path = os.path.join(input_folder, file_name)
        try:
            # Load the Excel file
            df = pd.read_excel(file_path, sheet_name=None, engine="openpyxl")
            
            # Process each sheet in the file
            for sheet_name, sheet_data in df.items():
                # Convert to DataFrame for easier handling
                sheet_data = pd.DataFrame(sheet_data)
                
                # Flatten the data to search for "Punjab" and "Tripura"
                try:
                    # Locate "Punjab" and "Tripura" anywhere in the dataset
                    start_row = sheet_data.apply(lambda row: row.astype(str).str.contains("Punjab", na=False).any(), axis=1).idxmax()
                    end_row = sheet_data.apply(lambda row: row.astype(str).str.contains("Tripura", na=False).any(), axis=1).idxmax()
                    
                    # Ensure "start_row" comes before "end_row"
                    if start_row <= end_row:
                        # Extract rows from Punjab to Tripura (inclusive)
                        extracted_data = sheet_data.loc[start_row:end_row, :]
                        
                        # Add a column for the file and sheet name
                        extracted_data["Source File"] = file_name
                        extracted_data["Sheet Name"] = sheet_name
                        
                        # Append the extracted data to the combined list
                        combined_data.append(extracted_data)
                    else:
                        print(f"Warning: 'Punjab' found after 'Tripura' in {file_name}, Sheet: {sheet_name}")
                except ValueError:
                    # Skip if "Punjab" or "Tripura" is not found
                    print(f"'Punjab' or 'Tripura' not found in {file_name}, Sheet: {sheet_name}")
        except Exception as e:
            print(f"Error processing file {file_name}: {e}")

# Combine all extracted data into a single DataFrame
if combined_data:
    final_data = pd.concat(combined_data, ignore_index=True)
    
    # Save the combined data to a new Excel file
    final_data.to_excel(output_file, index=False, engine="openpyxl")
    print(f"Data extraction complete. Output saved to {output_file}")
else:
    print("No data extracted. Please check your files.")
