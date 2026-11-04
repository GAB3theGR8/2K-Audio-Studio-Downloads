const guideCopy = {
 en: {
 language:'PAGE LANGUAGE', scope:'Website language · Studio has its own English / 中文 selector',
 title:'From first listen to game night', intro:'A simple workflow for sounds, PA cues and Jukebox tracks. Desktop button names are shown in English.',
 flow:['OPEN','COMPARE','EDIT','EXPORT','TEST'],
 steps:[
 ['Choose your language','In Studio v0.8.3 or later, use the English / 中文 dropdown at the top right, beside Export IFF. The interface changes immediately and remembers your choice. The selector on this website changes only the website.'],
 ['Start a project','Choose New, give your project a name, then select Game folder or Import IFF / RESA. Pick an archive and a sound. Use Save project to create a .2kaudio file. Keep NBA, EuroLeague and other packs in separate projects.'],
 ['Compare original and replacement','The top waveform is the original / loaded reference; the bottom is your editable replacement. Play loaded IFF auditions the opened file. Play stock 2K27 auditions the game default when available. Click either waveform to activate it and place the cursor; each has its own Play / Pause / Stop controls. Space plays or pauses the active waveform.'],
 ['Import and edit','Import audio / RESA accepts WAV, MP3, OGG and RESA. Drag a selection on the bottom waveform to trim, copy, cut, paste or repeat. Adjust gain and fades, and use Undo / Redo to compare changes. The source file stays unchanged.'],
 ['Shape the space','Scroll beneath the waveforms to the inline effects rack. Start with an indoor, outdoor, gym, arena, PA or distant-crowd preset. Use the knobs for EQ, reverb, echo, stereo width, compression and saturation. Compare dry / processed previews and the live waveform overlay. Apply commits an undoable edit.'],
 ['Balance the level','Normalize peaks raises or lowers the replacement to the shared −0.1 dBTP ceiling. A peak advisory offers Continue to export at your chosen level, or Cancel to adjust it. Continuing does not normalize your sound; excessive levels may still distort in game.'],
 ['Save and switch projects','Save project updates your working .2kaudio file. Save as creates a separate copy for a new version or pack. Open project resumes saved work; save before switching. Project archives switches between archives in the same project. Projects retain replacements and the current unapplied waveform, selections and effects settings. Saving a project does not install or export game files.'],
 ['Export, install and test','Export to a separate staging folder first. Close the game before changing installed files. Copy the generated files into mods with their intended relative paths. Test a short scenario that triggers the sound: check timing, volume, distortion and loop joins. Reopen your project to refine it, and keep a way to undo installed changes.']
 ],
 routesTitle:'Three export routes', routes:[
 ['SOUND EFFECTS · IFF / RESA','Apply to IFF → Export IFF writes the entire archive, preserving untouched resources. Keep its original filename and relative game path under mods. Export RESA saves the selected sound from any source, including current waveform edits; it does not rebuild an IFF or install the sound.'],
 ['PA SOUNDS · BY TEAM','Open PA Sounds, choose a team and audition candidate cues. Import/edit, then Apply PA sound → Export PA team exports edited sounds only. A single Export game files creates PA Export/newaudio/eventmusic/<filename>.wav. Copy newaudio into mods; the team-named wrapper is for organizing your export. Shared cues can affect multiple teams.'],
 ['JUKEBOX · MUSIC + METADATA','Choose Jukebox and select a track. Import an MP3 to read title, artist and embedded artwork when present, or edit them yourself. Export selected tracks together: the bundle includes the complete music.iff, audio in newaudio/jukeboxmusic/ or newaudio/jukeboxmusic_park/, and edited artwork at its native path. Copy the bundle contents into mods. Artwork overrides still need in-game confirmation.']
 ],
 faqTitle:'Frequently asked questions', faqs:[
 ['Where do I get a license?','Ask Gabe for a license key, then activate on your computer. First activation needs a connection; approved installations can work offline for up to seven days.'],
 ['Does the download include stock game audio?','No. Stock references are read from your installed game. Editing and audio processing stay on your PC.'],
 ['Why can’t my music player open the exported WAV?','PA and Jukebox game .wav files contain native 2K Opus data, not ordinary PCM WAV. The filename and extension match what the game expects.'],
 ['What is Save project versus Export?','Save project keeps editable work so you can resume it. Export creates files for game use. You normally want to do both.'],
 ['Does Continue to export fix clipping?','No. It preserves your chosen level. Use Normalize peaks or reduce gain if you want to lower the peak. Audio already distorted in the source cannot be repaired merely by turning it down.'],
 ['Why is there no stock reference for my sound?','Some mod-only variants have no stock counterpart. The loaded reference and the default game reference are separate sources.'],
 ['Can I remove songs to shorten the main soundtrack?','That experiment was withdrawn after a test stopped music playback. Replace existing tracks instead; main-soundtrack deletion is not supported.'],
 ['How do I update?','Save your project, then choose Update and restart when Studio offers a signed update. You can also close Studio and run the installer from this page.'],
 ['Will every export work perfectly in game?','Test before sharing. PA team associations are candidates and shared files may affect other teams. Listen for balance and timing in the actual situation where the cue plays.']
 ], reference:'Detailed features, release notes & technical reference (English)', install:'Install for Windows', portable:'Portable ZIP', feature:'Features', how:'How to use', faq:'FAQ'
 },
 zh: {
 language:'网页语言 / PAGE LANGUAGE',scope:'此处只切换网页语言 · Studio 内有独立的 English / 中文 选项',
 title:'从试听到游戏实测',intro:'音效、PA 音乐和点唱机歌曲的简明操作流程。下方保留英文按钮名称，便于对照。',flow:['打开','对比','编辑','导出','测试'],
 steps:[
 ['切换 Studio 语言','在 Studio v0.8.3 或更新版本中，使用右上角 Export IFF 旁的 English / 中文 下拉框。界面会立即切换，并记住选择。本网页的语言选择器仅影响网页。'],
 ['新建项目','点击 New，给项目命名，然后选择 Game folder 或 Import IFF / RESA。打开档案并选择声音。用 Save project 保存为 .2kaudio 文件。NBA、EuroLeague 等不同音频包建议使用独立项目。'],
 ['对比原音与替换音','上方波形为原始／已加载的参考音频，下方为可编辑的替换音频。Play loaded IFF 试听已打开文件；Play stock 2K27 在可用时试听游戏默认版本。点击任一波形可激活并定位光标，各自具有 Play / Pause / Stop 控制。空格播放或暂停当前激活的波形。'],
 ['导入并编辑','Import audio / RESA 支持 WAV、MP3、OGG 和 RESA。拖动选择下方波形的一段，即可裁剪、复制、剪切、粘贴或重复。调整增益和淡入淡出，用 Undo / Redo 撤销或重做。源文件保持不变。'],
 ['塑造空间感','向下滚动至波形下方的内嵌效果区。从室内、室外、体育馆、球场、PA 或远处观众预设开始。旋钮可调整 EQ、混响、回声、立体声宽度、压缩及饱和。对比 dry / processed 试听并观察实时波形叠加。Apply 提交可撤销的编辑。'],
 ['调整音量','Normalize peaks 将替换音频提高或降低至统一的 −0.1 dBTP 峰值上限。峰值提示允许选择 Continue to export 保留当前音量，或 Cancel 返回调整。继续导出不会自动归一化；过高音量在游戏中仍可能失真。'],
 ['保存及切换项目','Save project 更新当前 .2kaudio 项目。Save as 为新版本或音频包另存一份。Open project 恢复已有项目，切换前请保存。Project archives 可切换同一项目中的档案。项目保留替换音频、当前尚未应用的波形、选区及效果设置。保存项目不等于导出或安装游戏文件。'],
 ['导出、安装并测试','先导出至独立的临时文件夹。修改已安装文件前请关闭游戏。按原有相对路径将生成的文件复制到 mods。进入能够触发该声音的场景，检查时机、音量、失真和循环衔接。需要调整时重新打开项目，并保留撤销安装改动的方法。']
 ], routesTitle:'三种导出方式',routes:[
 ['音效 · IFF / RESA','Apply to IFF → Export IFF 导出整个档案并保留未修改资源。在 mods 下保持原文件名及相对路径。Export RESA 可从任意来源导出当前声音，包括尚未应用的波形编辑，但不会自动重建 IFF 或安装声音。'],
 ['PA 音乐 · 按球队','打开 PA Sounds，选择球队并试听候选音频。导入编辑后，Apply PA sound → Export PA team 仅导出已编辑声音。单个 Export game files 会生成 PA Export/newaudio/eventmusic/<filename>.wav。将 newaudio 复制进 mods；球队名称文件夹仅用于整理导出包。共享声音可能影响多个球队。'],
 ['点唱机 · 歌曲与信息','打开 Jukebox 并选择歌曲。导入 MP3 可读取已有的标题、艺术家及内嵌封面，也可手动编辑。一起导出所选歌曲时，包含完整 music.iff、newaudio/jukeboxmusic/ 或 newaudio/jukeboxmusic_park/ 下的音频，以及原生路径下的已编辑封面。将导出内容复制到 mods。封面替换仍需游戏内验证。']
 ],faqTitle:'常见问题',faqs:[
 ['如何获得授权？','向 Gabe 获取许可密钥并在自己的电脑上激活。首次激活需要联网；已批准的安装最多可离线使用七天。'],
 ['下载包包含游戏原音吗？','不包含。默认参考音频从已安装游戏读取。编辑及音频处理均在本机完成。'],
 ['为什么普通播放器无法打开导出的 WAV？','PA 和点唱机导出的游戏 .wav 包含原生 2K Opus 数据，而非普通 PCM WAV。文件名及扩展名符合游戏要求。'],
 ['保存项目和导出有什么区别？','保存项目用于保留可继续编辑的工作；导出用于生成游戏文件。通常两者都需要。'],
 ['继续导出会修复削波吗？','不会，它保留当前音量。可使用 Normalize peaks 或降低增益来降低峰值。源音频已有的失真无法仅靠降低音量修复。'],
 ['为什么找不到默认参考音？','部分模组独有声音没有默认对应项。已加载参考与游戏默认参考是不同来源。'],
 ['可以删除主原声带歌曲以缩短列表吗？','此实验功能已撤回，因为一次测试导致音乐无法播放。目前请替换现有歌曲，不支持删除主原声带歌曲。'],
 ['如何更新？','先保存项目，在 Studio 提示签名更新时选择 Update and restart。也可关闭 Studio，手动运行本页安装程序。'],
 ['导出后一定能正常运行吗？','分享前请在游戏内测试。PA 球队关联为候选匹配，共享文件可能影响其他球队。请在实际触发场景检查音量及时间。']
 ],reference:'详细功能、版本说明及技术参考（英文）',install:'下载 Windows 安装程序',portable:'便携 ZIP',feature:'功能',how:'使用指南',faq:'常见问题'
 }
};
const safe=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const extraCopies=[
 ['.buttons + p','<strong>需要 Gabe 提供许可密钥。</strong> 授权适用于一台电脑上的一个 Windows 用户。首次激活需联网；获批后最多可离线使用七天。音频保留在本机。'],
 ['.meta','Windows 10/11 · 64 位 · 按用户安装 · 无需安装 Python'],
 ['.note','所有编辑均在本机完成。PA 的 .wav 为游戏使用的原生 2K Opus 数据。球队关联为候选匹配，共享文件可能影响多个球队。原生导出不额外添加一秒静音。默认参考需要已安装的 NBA 2K27；部分模组声音无默认对应项。安装及分享前请进行游戏内测试。']
];
extraCopies.forEach(([selector,zh])=>{const e=document.querySelector(selector);if(e){e.dataset.en=e.innerHTML;e.dataset.zh=zh}});
function setPageLanguage(lang){
 const t=guideCopy[lang]||guideCopy.en;document.documentElement.lang=lang;document.querySelector('#page-language').value=lang;
 document.querySelector('#language-title').textContent=t.language;document.querySelector('#language-scope').textContent=t.scope;
 document.querySelector('#visual-guide').innerHTML=`<h2>${t.title}</h2><p>${t.intro}</p><div class="guide-flow" aria-hidden="true">${t.flow.map(x=>`<span>${x}</span>`).join('<b>→</b>')}</div><div class="guide-steps">${t.steps.map((x,i)=>`<article class="guide-step"><span class="step-number">${i+1}</span><h3>${x[0]}</h3><p>${safe(x[1])}</p></article>`).join('')}</div><h2>${t.routesTitle}</h2>${t.routes.map(x=>`<article class="export-route"><h3>${x[0]}</h3><p>${safe(x[1])}</p></article>`).join('')}<div class="preview"><img loading="lazy" src="effects.png" alt="Studio inline EQ, reverb and dynamics controls"></div>`;
 document.querySelector('#studio-faq').innerHTML=`<h2>${t.faqTitle}</h2>${t.faqs.map(x=>`<details class="faq-entry"><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join('')}`;
 document.querySelector('#reference-title').textContent=t.reference;
 document.querySelectorAll('[data-copy]').forEach(e=>e.textContent=t[e.dataset.copy]);
 document.querySelectorAll('[data-en][data-zh]').forEach(e=>e.innerHTML=e.dataset[lang]);
 try{localStorage.setItem('studio-download-language',lang)}catch{}
}
let savedLanguage=new URLSearchParams(location.search).get('lang');try{savedLanguage=savedLanguage||localStorage.getItem('studio-download-language')}catch{}
setPageLanguage(savedLanguage==='zh'?'zh':'en');
document.querySelector('#page-language').addEventListener('change',e=>{setPageLanguage(e.target.value);const u=new URL(location.href);u.searchParams.set('lang',e.target.value);history.replaceState(null,'',u)});
