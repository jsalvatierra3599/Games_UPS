# 
#Nombre: Jose Salvatierra
#Examen
#

import pygame

class Juego:
    pantalla = None
    aliens = []
    disparos = []
    derrota = False

    def __init__(self, width, height):
        pygame.init()
        pygame.display.set_caption('Examen-Programacion Hipermedial')
        self.width = width
        self.height = height
        self.pantalla = pygame.display.set_mode((width, height))
        self.clock = pygame.time.Clock()
        done = False

        jugador = Jugador(self, width / 2, height - 20)
        generator = Generador(self)
        disparo = None

        while not done:
            if len(self.aliens) == 0:
                    self.displayText("Has ganado!!")

            pressed = pygame.key.get_pressed()
            if pressed[pygame.K_LEFT]:  
                jugador.x -= 2 if jugador.x > 20 else 0  
            elif pressed[pygame.K_RIGHT]:  
                jugador.x += 2 if jugador.x < width - 20 else 0  

            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    done = True
                if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE and not self.derrota:
                    self.disparos.append(Cohete(self, jugador.x, jugador.y))

            pygame.display.flip()
            self.clock.tick(60)
            self.pantalla.fill((0, 0, 0))

            for alien in self.aliens:
                alien.draw()
                alien.checkCollision(self)
                if (alien.y > height):
                    self.derrota = True
                    self.displayText("Perdiste!!")

            for disparo in self.disparos:
                disparo.draw()

            if not self.derrota: jugador.draw()

    def displayText(self, text):
        pygame.font.init()
        font = pygame.font.SysFont('Arial', 50)
        textsurface = font.render(text, False, (44, 0, 62))
        self.pantalla.blit(textsurface, (110, 160))


class Extraterrestre:
    def __init__(self, game, x, y):
        self.x = x
        self.game = game
        self.y = y
        self.size = 40

    def draw(self):
        pygame.draw.rect(self.game.pantalla,  
                         (0,255,0),  
                         pygame.Rect(self.x, self.y, self.size, self.size))
        #self.y += 0.05

    def checkCollision(self, game):
        for disparo in game.disparos:
            if (disparo.x < self.x + self.size and
                    disparo.x > self.x - self.size and
                    disparo.y < self.y + self.size and
                    disparo.y > self.y - self.size):
                game.disparos.remove(disparo)
                game.aliens.remove(self)


class Jugador:
    def __init__(self, game, x, y):
        self.x = x
        self.game = game
        self.y = y

    def draw(self):
        pygame.draw.rect(self.game.pantalla,
                         (0, 0, 255),
                         pygame.Rect(self.x, self.y, 25, 25))


class Generador:
    def __init__(self, game):
        margin = 30  
        width = 50  
        for x in range(margin, game.width - margin, width):
            for y in range(margin, int(game.height / 2), width):
                game.aliens.append(Extraterrestre(game, x, y))

       


class Cohete:
    def __init__(self, game, x, y):
        self.x = x
        self.y = y
        self.game = game

    def draw(self):
        pygame.draw.rect(self.game.pantalla,  
                         (255, 0, 0), 
                         pygame.Rect(self.x, self.y, 2, 4))
        self.y -= 2  


if __name__ == '__main__':
    game = Juego(500, 400)
