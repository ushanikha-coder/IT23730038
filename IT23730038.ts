import { test, expect } from '@playwright/test';

// Test Case 1: Daily language usage, Simple sentence, Short (S)
test('Pos_Fun_0001 - Daily greeting simple sentence (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('vanakkam nanbaa', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('வணக்கம்');
});

// Test Case 2: Greeting/request, Imperative, Short (S)
test('Pos_Fun_0002 - Greeting request imperative (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('thayavu seidhu utkaarungal', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('தயவு');
});

// Test Case 3: Daily language, Past tense, Short (S)
test('Pos_Fun_0003 - Daily language past tense (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('naan saapitteen', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('நான்');
});

// Test Case 4: Interrogative, Present tense, Short (S)
test('Pos_Fun_0004 - Interrogative present tense (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('nee eppadi irukkira?', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('நீ');
});

// Test Case 5: Future tense, Simple sentence, Short (S)
test('Pos_Fun_0005 - Future tense simple (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('naalai naan varuveen', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('நாளை');
});

// Test Case 6: Negation, Simple sentence, Short (S)
test('Pos_Fun_0006 - Negation simple sentence (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('enakku theriyaathu', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('எனக்கு');
});

// Test Case 7: Plural, Daily usage, Short (S)
test('Pos_Fun_0007 - Plural daily usage (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('pillaikal vilayaadugiraarkal', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('பிள்ளைகள்');
});

// Test Case 8: Compound sentence, Medium (M)
test('Pos_Fun_0008 - Compound sentence medium (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('naan kaalaiyil ezhuntheen aanaal en thambi thoongikondirunthaan', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('நான்');
});

// Test Case 9: Complex sentence, Medium (M)
test('Pos_Fun_0009 - Complex sentence medium (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('mazhai peiyumendru ninaiththaal naan kudaiyai eduthukonden', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('மழை');
});

// Test Case 10: Punctuation/numbers, Medium (M)
test('Pos_Fun_0010 - Punctuation and numbers (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('en vayathu 25, naan chennai-yil vasikkiren.', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('வயது');
});

// Test Case 11: Slang/casual, Greeting, Short (S)
test('Pos_Fun_0011 - Slang casual greeting (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('enna da solla vara', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('என்ன');
});

// Test Case 12: Long paragraph, Multiple sentences, Long (L)
test('Pos_Fun_0012 - Long paragraph multiple sentences (L)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('inru kaalaiyil naan ezhuntheen. pinbu palthulakki mugathai kazhuvinen. amma samaiththa saapaattai saapitteen. appozhuthu en nanban vanthaan. naangal sernthu pallikoodathirku sendroom. vazhiyil pala kaadchikal kandoom. pallikoodathil aasiriyar engalai varaverththaar. vakuppil amainthirukkum bodhu engal padippu thudangiyathu.', { delay: 20 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('இன்று');
});

// Test Case 13: Mixed Thanglish + English, Simple, Short (S)
test('Pos_Fun_0013 - Mixed Thanglish English simple (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('naan office poren', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('நான்');
});

// Test Case 14: Daily usage, Present continuous, Short (S)
test('Pos_Fun_0014 - Daily present continuous (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('avan padithukondirukkiraan', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('அவன்');
});

// Test Case 15: Greeting, Exclamatory, Short (S)
test('Pos_Fun_0015 - Greeting exclamatory (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('romba nandri!', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('ரொம்ப');
});

// Test Case 16: Request, Interrogative imperative, Short (S)
test('Pos_Fun_0016 - Request interrogative imperative (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('konjam thanni tharuveergalaa?', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('கொஞ்சம்');
});

// Test Case 17: Daily language, Plural past, Medium (M)
test('Pos_Fun_0017 - Daily plural past tense (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('naangal nerru kadaikku sendru palaporulkal vaanginoom', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('நாங்கள்');
});

// Test Case 18: Slang, Casual negation, Short (S)
test('Pos_Fun_0018 - Slang casual negation (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('adhellaam venam da', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('வேணாம்');
});

// Test Case 19: Formatting, Multiple punctuation, Medium (M)
test('Pos_Fun_0019 - Formatting multiple punctuation (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('enna? nee varalai! adhuku kaaranam sollu.', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('என்ன');
});

// Test Case 20: Daily usage, Conditional, Medium (M)
test('Pos_Fun_0020 - Daily conditional sentence (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('nee vanthaal naan santhoshamaaga iruppaen', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('நீ');
});

// Test Case 21: Greeting, Formal plural, Short (S)
test('Pos_Fun_0021 - Greeting formal plural (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('ungalai santhithu magizhchi', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('உங்களை');
});

// Test Case 22: Daily language, Comparative, Medium (M)
test('Pos_Fun_0022 - Daily comparative sentence (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('indha poo andha poovaivida azhagaaga irukkindrathu', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('இந்த');
});

// Test Case 23: Mixed English, Compound, Medium (M)
test('Pos_Fun_0023 - Mixed English compound (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('naan computer use pannuren aanaal mobile use pannalai', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('நான்');
});

// Test Case 24: Long narrative, Multiple tenses, Long (L)
test('Pos_Fun_0024 - Long narrative multiple tenses (L)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('nerru naan en nanbanudan thiraipadathirku sendreen. padaam romba azhagaaga irunthadu. naangal popcorn saapittoom. ippozhuthu veetil irukkiren. naalai mendum pogalaam endru ninaikiren. en amma saapaadu seidhukondirukiraal. appa veliyil sendruvidaar. nanban phone seivaanaa endru paarkiren. adutha vaaram oru puthiya padam varugirathu.', { delay: 20 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  expect(value).toContain('நேற்று');
});

// ===================== NEGATIVE FUNCTIONAL TEST CASES =====================
// These test cases validate edge cases, complex mixed language, or ambiguity
// where the system is expected to fail or produce incorrect/incomplete output

// Test Case 25: Edge case - Special characters mixed, Short (S)
test('Neg_Fun_0001 - Special characters mixed edge case (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('naan @home #irukken $100', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  // Expecting incomplete/incorrect transliteration due to special characters
  expect(value).toContain('@');
});

// Test Case 26: Edge case - Continuous text without spaces, Medium (M)
test('Neg_Fun_0002 - No spaces continuous text edge case (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('naaborenvetukkuporenkaalaiyilezhukireen', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  // System may fail to properly segment and transliterate continuous text
  expect(value.length).toBeGreaterThan(0);
});

// Test Case 27: Ambiguity - Homophones confusion, Short (S)
test('Neg_Fun_0003 - Homophones ambiguity edge case (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('paal paal paal', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  // Ambiguous - could be பால் (milk) or பாள் (split) - system may not differentiate
  expect(value).toContain('பால்');
});

// Test Case 28: Complex mixed - Heavy code-switching, Medium (M)
test('Neg_Fun_0004 - Heavy code switching mixed (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('I went to kadai and bought some rice aprom came veedu', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  // Heavy English-Tamil mixing causes incorrect transliteration of English words
  // "went" becomes "வெண்ட்", "bought" becomes "பௌஜிஹ்ட்" - phonetic but meaningless
  expect(value).toContain('வெண்ட்');
});

// Test Case 29: Edge case - Repeated characters, Short (S)
test('Neg_Fun_0005 - Repeated characters edge case (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('naaaaaaaan varuveeeeeeen', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  // Exaggerated repeated characters may not transliterate correctly
  expect(value.length).toBeGreaterThan(0);
});

// Test Case 30: Edge case - Numbers as words mixed, Medium (M)
test('Neg_Fun_0006 - Numbers as words mixed edge case (M)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('en phone number 9876543210 idhu en veedu 12/34 address', { delay: 30 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  // Long numbers and address formats may cause issues
  expect(value).toContain('என்');
});

// Test Case 31: Ambiguity - Non-standard spelling variations, Short (S)
test('Neg_Fun_0007 - Non-standard spelling ambiguity (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('wanakkam nanba epdi iruka', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  // Non-standard spellings (w instead of v, epdi instead of eppadi) may fail
  expect(value.length).toBeGreaterThan(0);
});

// Test Case 32: Complex - Gibberish/nonsense text, Short (S)
test('Neg_Fun_0008 - Gibberish nonsense text (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('xyz qwerty asdfgh jklzxc', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  // Gibberish text should still attempt transliteration but produce meaningless output
  expect(value.length).toBeGreaterThan(0);
});

// Test Case 33: Edge case - Emoji and unicode mixed, Short (S)
test('Neg_Fun_0009 - Emoji unicode mixed edge case (S)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('naan happy irukkiren :) <3', { delay: 50 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  // Emoticons and symbols may interfere with transliteration
  expect(value).toContain(':)');
});

// Test Case 34: Complex - Very long single word, Long (L)
test('Neg_Fun_0010 - Very long single word complex (L)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await page.keyboard.type('thiraboraiyoasirayarungalukaboraiyoasirayarungalukaboraiyoasirayarungalukkumthiraboraiyoasirayarungalukaboraiyoasirayarungalukaboraiyoasirayarungalukkumthiraboraiyoasirayarungalukaboraiyoasirayarungalukaboraiyoasirayarungalukkumthiraboraiyoasirayarungalukaboraiyoasirayarungalukaboraiyoasirayarungalukkum', { delay: 10 });
  await page.waitForTimeout(1000);
  await expect(inputBox).toBeVisible();
  const value = await inputBox.inputValue();
  console.log('Output:', value);
  // Extremely long single word may cause buffer or processing issues
  expect(value.length).toBeGreaterThan(0);
});

// ===================== UI TEST CASES =====================
// These test cases validate the user interface behavior and real-time capabilities

// Test Case 35: UI - Real-time update capability verification
test('Pos_UI_0001 - Verifying real-time update capability', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  
  // Verify the textarea is visible and ready
  await expect(inputBox).toBeVisible();
  await inputBox.click();
  
  // Type first character and verify immediate transliteration
  await page.keyboard.type('va', { delay: 100 });
  await page.waitForTimeout(500);
  let value1 = await inputBox.inputValue();
  console.log('After "va":', value1);
  
  // Type more characters and verify real-time update
  await page.keyboard.type('na', { delay: 100 });
  await page.waitForTimeout(500);
  let value2 = await inputBox.inputValue();
  console.log('After "vana":', value2);
  
  // Verify content changed (real-time update occurred)
  expect(value2.length).toBeGreaterThan(value1.length);
  
  // Complete the word and verify final transliteration
  await page.keyboard.type('kkam', { delay: 100 });
  await page.waitForTimeout(500);
  let value3 = await inputBox.inputValue();
  console.log('After "vanakkam":', value3);
  
  // Add space to trigger word completion
  await page.keyboard.type(' ', { delay: 100 });
  await page.waitForTimeout(500);
  let finalValue = await inputBox.inputValue();
  console.log('Final output:', finalValue);
  
  // Verify the Tamil word வணக்கம் appears after space (word completion trigger)
  expect(finalValue).toContain('வணக்கம்');
  
  // Verify real-time updates happened progressively
  expect(value3.length).toBeGreaterThan(value2.length);
  console.log('Real-time update verification: PASSED');
});