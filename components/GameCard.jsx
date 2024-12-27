/* eslint-disable prettier/prettier */
import { useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, View, Animated, Pressable } from 'react-native';
import { Score } from './Score';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {

  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className='active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4'> 
        <View
        className="flex-row gap-4"
        key={game.slug}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text style={styles.title}>{game.title || 'No Title'}</Text>
            <Score score={game.score} maxScore={100} />
            <Text style={styles.description}>
              {game.description 
                ? `${game.description.slice(0, 100)}...` 
                : 'Click for more details'}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    color: "#eee",
    marginTop: 10,
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
    marginTop: 10,
  },
});
