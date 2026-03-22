import time
from zipfile import ZipFile
from pathlib import Path
import os
import sys

# 1. Captura o caminho enviado pelo Electron
# Se não receber argumento (ex: rodando fora do app), usa o caminho relativo padrão
if len(sys.argv) > 1:
    pasta_jogos = Path(sys.argv[1])
else:
    base_path = Path(__file__).resolve().parent
    pasta_jogos = base_path / "ps2_emulator" / "PS2" / "JOGOS PS2"

print(f"Monitorando pasta: {pasta_jogos}")

while True:
    try:
        # 2. Verifica se a pasta existe
        if pasta_jogos.exists():
            # Lista todos os arquivos da pasta
            for arquivo in os.listdir(pasta_jogos):
                if arquivo.lower().endswith('.zip'):
                    caminho_zip = pasta_jogos / arquivo
                    arquivo_iso_esperado = caminho_zip.with_suffix('.iso')

                    # 3. Se o ZIP existe e a ISO ainda não, extrai
                    if not arquivo_iso_esperado.exists():
                        print(f"Novo jogo detectado: {arquivo}. Extraindo...")
                        try:
                            with ZipFile(caminho_zip, 'r') as zip_ref:
                                # Extrai direto na pasta de jogos
                                zip_ref.extractall(path=pasta_jogos)
                            
                            print(f"{arquivo} extraído com sucesso!")
                            
                            # 4. Remove o ZIP após extrair para não repetir
                            os.remove(caminho_zip)
                        except Exception as e:
                            print(f"Erro ao extrair {arquivo}: {e}")
        
    except Exception as e:
        print(f"Erro no loop: {e}")

    # Pausa de 3 segundos antes da próxima varredura
    time.sleep(3)