<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Serve the supplied Bake ñ Love document inside an isolated full-viewport iframe at the index route so its original CSS, DOM interactions, and screen-fit script remain unaffected by framework styles.
- Keep supplied source files in public/bake-love and image asset pointers in src/assets; use their hosted URLs in the original document to preserve the supplied imagery.
