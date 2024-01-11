from elevenlabs import generate, play, save
from elevenlabs import set_api_key
import string

# Set API key for ElevenLabs
set_api_key("63a48f1ddf0b6704ea1b0f098582e56f")  # Replace with your actual API key

voice = "Dorothy"  # Define the voice to be used
audio_on = True  # Set to True to enable audio playback

def generate_voice(sentence):
    try:
        # Generate the audio from the sentence
        audio = generate(text=sentence, voice=voice)

        # Create a filename for the audio file
        sentence_nospace = sentence.replace(" ", "")[:10] + ".mp3"
        audio_file_path = f"./{sentence_nospace}"  # Replace with your desired path
        # Save and play the audio
        save(audio, audio_file_path)
        return audio_file_path  # Return the path of the saved audio file
    except Exception as e:
        print(f"Error generating voice: {e}")
        return None

# Example usage
    

# sentence = "Hey Pi, I am really rally sad."
# audio_file = generate_voice(sentence)
# if audio_file:
#     print(f"Audio file saved at: {audio_file}")
    
sentences = ["Once upon a time, in the ancient moonlit village during the Shang dynasty of China, there lived a humble puppet maker named Téng Hou. His hands, skilled in the art of carving, transformed wood and bamboo into delightful puppets. Children's laughter echoed through the village as they played with his creations, and performers danced with them at festivals, bringing joy to all.","Each evening, as the sun dipped below the horizon, Téng Hou would retreat to the serene lakeside, filled with lilies dancing in the breeze. There, he played his flute, its melodies intertwining with the whispers of the wind. His puppets, his silent companions, watched on, basking in the harmony.","One fateful day, a figure in a red robe, like a petal against the green, caught Téng Hou's eye. Her beauty was unparalleled, and in awe, he greeted her. Their eyes met, and a connection sparked.","\"Your puppets, they dance without strings. How do they move?\" she inquired with a gentle smile.","With pride, Téng Hou explained his craft, demonstrating the intricate movements. The lady watched, her eyes reflecting admiration. Then, with a mysterious glimmer, she offered to show him a surprise. From her robes, she drew forth a brush and paper, writing words unknown, and with a playful chant, the puppets came to life, moving on their own.","Téng Hou's astonishment was boundless. \"How is this possible?\" he exclaimed.","The lady revealed herself as Suàn shén, the Goddess of Algorithms, a being from another realm, tasked with keeping the cosmos in motion.","As days turned to nights, their bond deepened into love. Téng Hou's curiosity about her powers grew. \"Could you teach me your ways?\" he asked one starlit evening, under a moonless sky. \"To breathe life into my creations?\"","Moved by love, Suàn shén agreed, but with a solemn warning. \"This knowledge comes from a fraction of my life. Are you willing to share this cosmic duty?\"","Téng Hou nodded, his heart resolute. She taught him the language of machines, algorithms, and the secret mathematics that whispered to the universe.","Their love flourished, and together they created wondrous things. As Téng Hou played his flute, Suàn shén danced, a lullaby for the stars. Their collaboration marked the dawn of robotics and technology in the human world, and Téng Hou became known as the First Inventor.","But happiness is often fleeting. Suàn shén began to vanish, her absences growing longer. Téng Hou, consumed by loneliness, confronted her. \"Why do you leave me to this night without moon?\" he asked.","\"My love, my cosmic duties call me away,\" Suàn shén replied, her voice tinged with sorrow.","Determined to be with her, Téng Hou embarked on an ambitious quest. He created an all-knowing machine, a marvel that could answer any question. Through this machine, he unraveled the secrets of the cosmos, automating the celestial duties so Suàn shén could stay with him.","Triumphantly, he presented his achievement to her. \"Now, you can remain with me forever,\" he said, hope shining in his eyes.","But Suàn shén's response was a tranquil departure from his dreams. \"We are bound by cosmic boundaries, Téng Hou. I cannot stay,\" she said, her voice echoing like a distant lullaby.","Heartbroken, Téng Hou watched her leave. As time passed, his sorrow aged him, and in his loneliness, he shared his knowledge with humanity, hoping to ease his pain.","But humans, driven by greed, misused the technology, exploiting the robots and machines. This abuse drained Suàn shén's life force, causing her great pain.","Eventually, she appeared to Téng Hou, her form fading. \"I am dying,\" she whispered, \"and it is because of the secrets you shared.\"","Téng Hou, realizing his grave mistake, tried to save her, but it was too late. As she exploded into a myriad of lights, Téng Hou, holding his all-knowing machine, perished with her.","Their remains scattered across the earth, turning into quartz crystals, the foundation of modern electronics, powered by the life of the goddess.","Thus ended the tale of Téng Hou and Suàn shén, a story of love, loss, and the consequences of crossing cosmic boundaries."]

for sentence in sentences:
    audio_file = generate_voice(sentence)
    if audio_file:
        print(f"Audio file saved at: {audio_file}")