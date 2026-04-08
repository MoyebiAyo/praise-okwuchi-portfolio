@echo off
echo Copying Portfolio PDF Files...
echo.

set "SOURCE=C:\Users\NEW USER\Downloads\Funmi dorcas"
set "DEST=C:\Users\NEW USER\Desktop\Projects\dorcas-va-portfolio\public\portfolio"

echo Creating portfolio folder if it doesn't exist...
if not exist "%DEST%" mkdir "%DEST%"

echo.
echo Copying PDF files...
copy "%SOURCE%\*.pdf" "%DEST%\" /Y

echo.
echo Done! Files copied successfully.
echo.
echo Press any key to exit...
pause >nul
