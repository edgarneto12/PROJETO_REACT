@echo off
echo Copiando arquivos da pasta dist...
xcopy /E /I /Y dist\* temp_deploy\

echo Mudando para branch gh-pages...
git checkout -B gh-pages

echo Limpando arquivos antigos...
for /f "delims=" %%i in ('dir /b /a-d ^| findstr /v "temp_deploy"') do del "%%i"
for /f "delims=" %%i in ('dir /b /ad ^| findstr /v "temp_deploy .git"') do rmdir /s /q "%%i"

echo Copiando novos arquivos...
xcopy /E /Y temp_deploy\* .\

echo Limpando pasta temporária...
rmdir /s /q temp_deploy

echo Adicionando arquivos ao Git...
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

echo Voltando para branch main...
git checkout main

echo Deploy concluído!
pause
