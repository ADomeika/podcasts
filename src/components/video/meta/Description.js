import React, { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../ui/AppText';

const description = `4K UHD Ultra HD shot of a Beautiful Tropical Palm Tree Beach with audio of lapping waves and singing birds for 10 hours.

Perfect for looping to relax, meditate, sleep, yoga, pilates, live wallpaper, dinner parties or just reading a book with as a nice window to look out of on your monitor or television.

Please Subscribe and check out our other videos for other great nature windows to relax to. 

Great minds come from great nature.

FACEBOOK: https://www.facebook.com/relaxwindows/
TWITTER: https://twitter.com/RelaxWindows`;

const NUM_OF_LINES = 6;

const Description = () => {
  const [showMore, setShowMore] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const onTextLayout = useCallback((e) => {
    setShowMore(e.nativeEvent.lines.length > NUM_OF_LINES);
  }, []);

  const numberOfLines = showMore && isOpened ? 0 : NUM_OF_LINES;

  return (
    <View>
      <AppText
        onTextLayout={onTextLayout}
        numberOfLines={numberOfLines}
        style={styles.description}
      >
        {description}
      </AppText>
      {showMore && (
        <AppText
          onPress={() => setIsOpened(!isOpened)}
          style={styles.showButton}
        >
          Show {isOpened ? 'Less' : 'More'}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    lineHeight: 18,
    marginVertical: 20,
  },
  showButton: {
    color: '#777',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.7,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
});

export default Description;
