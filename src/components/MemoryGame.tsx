'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';
import { Dictionary } from '../app/types/Dictionary';

interface Card {
  id: number;
  phrase: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export default function MemoryGame({ dictionary }: { dictionary: Dictionary }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // Inicializar el juego
  useEffect(() => {
    initializeGame();
  }, [dictionary]);

  const initializeGame = () => {
    const phrases = dictionary.memoryGamePhrases || [];
    
    // Crear pares de cartas
    const cardPairs = phrases.flatMap((phrase, index) => [
      { id: index * 2, phrase, isFlipped: false, isMatched: false },
      { id: index * 2 + 1, phrase, isFlipped: false, isMatched: false }
    ]);

    // Mezclar las cartas
    const shuffled = cardPairs.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setIsWon(false);
    setIsChecking(false);
  };

  const handleCardClick = (cardId: number) => {
    const clickedCard = cards.find(card => card.id === cardId);
    
    // No permitir clicks si estamos verificando o la carta ya está volteada
    if (isChecking || !clickedCard || flippedCards.includes(cardId) || clickedCard.isMatched) {
      return;
    }

    // Voltear la carta
    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);

    // Si es la segunda carta, verificar coincidencia
    if (newFlipped.length === 2) {
      setIsChecking(true);
      setMoves(moves + 1);

      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find(c => c.id === firstId);
      const secondCard = cards.find(c => c.id === secondId);

      if (firstCard && secondCard && firstCard.phrase === secondCard.phrase) {
        // ¡Coincidencia!
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === firstId || card.id === secondId
                ? { ...card, isMatched: true }
                : card
            )
          );
          setFlippedCards([]);
          setIsChecking(false);

          // Verificar si ganó
          const allMatched = cards.every(card => 
            card.id === firstId || card.id === secondId || card.isMatched
          );
          if (allMatched) {
            setTimeout(() => setIsWon(true), 300);
          }
        }, 600);
      } else {
        // No coinciden, voltear de nuevo
        setTimeout(() => {
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  const isCardFlipped = (cardId: number) => {
    const card = cards.find(c => c.id === cardId);
    return flippedCards.includes(cardId) || (card?.isMatched ?? false);
  };

  return (
    <div className="w-full bg-slate-800 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Sparkles className="text-purple-400" size={28} />
          <h3 className="text-2xl font-semibold text-white">
            {dictionary.memoryGameTitle || 'Juego de Memoria'}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-gray-300 font-mono">
            {dictionary.memoryGameMoves || 'Movimientos'}: <span className="text-purple-400 font-bold">{moves}</span>
          </div>
          <button
            onClick={initializeGame}
            className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            title={dictionary.memoryGameReset || 'Reiniciar'}
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-300 text-sm mb-6 text-center">
        {dictionary.memoryGameDescription || 'Juega y reflexiona mientras esperas mi respuesta'}
      </p>

      {/* Grid de cartas - 4 columnas estilo casino */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`relative h-40 cursor-pointer transition-all duration-500 transform ${
              isCardFlipped(card.id) ? 'rotate-y-180' : ''
            } ${card.isMatched ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            style={{ perspective: '1000px' }}
          >
            <div
              className="relative w-full h-full transition-transform duration-500"
              style={{
                transformStyle: 'preserve-3d',
                transform: isCardFlipped(card.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* Cara trasera (mostrada por defecto) */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center shadow-lg border-2 border-purple-400"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {/* Símbolo Yin Yang */}
                <div className="relative w-12 h-12">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-purple-200">
                    <circle cx="50" cy="50" r="48" fill="currentColor" stroke="#9333ea" strokeWidth="2"/>
                    <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2" fill="#1e293b"/>
                    <circle cx="50" cy="26" r="8" fill="#1e293b"/>
                    <circle cx="50" cy="74" r="8" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Cara frontal (con la frase) */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center p-3 shadow-lg border-2 border-purple-500"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <p className="text-white text-xs text-center font-medium leading-snug italic">
                  "{card.phrase}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje de victoria */}
      {isWon && (
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500 rounded-lg p-4 text-center animate-pulse">
          <p className="text-white font-bold text-xl mb-2">
            {dictionary.memoryGameWin || '🎉 ¡Felicidades! Has encontrado todas las frases'}
          </p>
          <p className="text-purple-300">
            {dictionary.memoryGameMoves || 'Movimientos'}: {moves}
          </p>
        </div>
      )}
    </div>
  );
}
