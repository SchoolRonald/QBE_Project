<script>
  import PageHeader from '../components/PageHeader.svelte';
  import SectionHeader from '../components/SectionHeader.svelte';
</script>

<section class="page-shell">
  <PageHeader 
    title="Model" 
    subtitle="Mathematical modeling of the lac operon using delayed differential equations"
  />

  <div class="content surface-card">
    <!-- Model Description -->
    <div class="section">
      <SectionHeader title="Three-Variable DDE Model" />
      <p>
        We chose a model of three differential equations from Yildirim et al.<sup>3</sup> This model utilizes delay differential 
        equations, for which the DEs depend on both the previous and the current values of the equation. This is necessary because 
        there are delays associated with the transcription and translation of the lac operon.
      </p>

      <h4>Model Variables</h4>
      <p>Our model is composed of the following three quantities:</p>
      <ul>
        <li><strong>M (mRNA concentration)</strong> — measured in nM</li>
        <li><strong>B (β-galactosidase concentration)</strong> — measured in nM</li>
        <li><strong>A (allolactose concentration)</strong> — measured in nM</li>
      </ul>

      <h4>The Three-Variable DDE System</h4>
      <div class="equation-block">
        <p class="equation-text">
          dM/dt = α(A/(K + A)) · exp(-τ<sub>M</sub>) - γ̃<sub>M</sub>M<br/>
          dB/dt = βM(t - τ<sub>B</sub>) - γ̃<sub>B</sub>B<br/>
          dA/dt = κB - (μ + γ)A
        </p>
      </div>

      <h4>Key Parameters</h4>
      <p>
        γ̃<sub>N</sub> = γ<sub>N</sub> + μ<sub>N</sub>, where γ̃<sub>N</sub> corresponds to the loss of mRNA, β-galactosidase, 
        and allolactose respectively due to degradation and dilution due to bacterial growth.
      </p>
      <ul>
        <li><strong>τ<sub>M</sub></strong> — A constant that represents the time delay of mRNA production due to transcription of mRNA from DNA (must be > 0)</li>
        <li><strong>τ<sub>B</sub></strong> — A constant that represents the time delay of β-galactosidase production due to translation from mRNA (must be > 0)</li>
        <li><strong>A/(K + A)</strong> — The production rate of mRNA is proportional to the fraction of free operator sites</li>
      </ul>

      <h4>Model Terms</h4>
      <p>
        The M(t - τ<sub>B</sub>) term models the increase in β-galactosidase concentration from translation from mRNA while 
        accounting for the time-delay in transcription.
      </p>
      <p>
        The κB term models the production of allolactose from the reaction catalyzed by β-galactosidase to produce allolactose 
        from lactose.
      </p>
      <p>
        The (μ + γ)A term models the loss of allolactose from the reverse reaction, where β-galactosidase catalyzes the reaction 
        to form glucose and galactose from allolactose.
      </p>
    </div>

    <!-- Beta-galactosidase Dependence -->
    <div class="section">
      <SectionHeader title="Dependence on β-galactosidase (B) Concentration" />
      <p>
        The activation of the lac operon is strictly dependent on the concentration of Beta-galactosidase (B), as illustrated by 
        the phase plane plot. This projection reveals a critical mathematical tipping point determined by the balance between 
        allolactose (A) and enzyme levels. Below this threshold, the enzyme concentration is insufficient to generate the allolactose 
        (A) required to sustain induction, causing the system to collapse back to the uninduced "off" state. Conversely, when the 
        initial concentration (B) exceeds this limit, it triggers a positive feedback loop that rapidly drives the system toward 
        the fully induced "on" state.
      </p>

      <figure class="figure">
        <div class="placeholder-image">
          <img src="/src/assets/phase-plane-b-concentration.jpg" alt="Phase plane plot showing B concentration dependence" />
        </div>
        <figcaption>Phase plane plot demonstrating the critical threshold for β-galactosidase concentration</figcaption>
      </figure>
    </div>

    <!-- Bistability -->
    <div class="section">
      <SectionHeader title="Bistability Analysis" />
      <p>
        To prove the system is bistable, we simulated the time evolution of Beta-galactosidase from six different starting points 
        (ranging from 0.6 nM to 1.6 nM) with external lactose held constant. The plot shows a clear split where the trajectories 
        diverge into two groups: the lower starting values (0.6, 0.8, 1.0 nM) drop down to the repressed state, while the higher 
        values (1.2, 1.4, 1.6 nM) rise to the induced state. This confirms that the model allows for two stable outcomes under 
        identical conditions.
      </p>

      <h4>Biological Significance</h4>
      <p>
        Biologically, this sensitivity creates a form of cellular memory. Because the final outcome depends on the system's history, 
        the cell effectively locks its decision to be either induced or repressed. This ensures the bacteria remain committed to a 
        specific metabolic strategy, preventing inefficient fluctuations even when environmental conditions stay the same.
      </p>

      <figure class="figure">
        <div class="placeholder-image">
          <img src="/src/assets/bistability-trajectories.jpg" alt="Bistability plot showing diverging trajectories" />
        </div>
        <figcaption>Time evolution of β-galactosidase concentration from six different initial conditions, demonstrating bistability</figcaption>
      </figure>
    </div>

    <!-- Conclusions -->
    <div class="section">
      <SectionHeader title="Conclusions" />
      <p>
        This computational model demonstrates how the lac operon exhibits bistable behavior, allowing <em>E. coli</em> to maintain 
        distinct metabolic states. The mathematical framework using delayed differential equations captures essential biological 
        dynamics including transcriptional and translational delays. The critical dependence on β-galactosidase concentration reveals 
        how enzymatic feedback loops enable cellular decision-making. These findings illustrate fundamental principles of gene 
        regulation applicable to more complex biological systems.
      </p>
    </div>
  </div>
</section>

<style>
  .content {
    padding: 3rem;
  }

  .section {
    margin-bottom: 3rem;
  }

  .section:last-child {
    margin-bottom: 0;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-bright);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--text);
    line-height: 1.8;
    margin: 1rem 0;
  }

  ul {
    color: var(--text);
    line-height: 1.8;
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: var(--text-bright);
    font-weight: 600;
  }

  em {
    font-style: italic;
    color: var(--text-secondary);
  }

  sup {
    font-size: 0.8em;
    vertical-align: super;
    color: var(--accent);
  }

  sub {
    font-size: 0.8em;
    vertical-align: sub;
  }

  .equation-block {
    background: rgba(0, 206, 209, 0.06);
    border-left: 4px solid var(--cyan);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1.5rem 0;
  }

  .equation-text {
    font-family: 'Courier New', monospace;
    color: var(--cyan-bright);
    line-height: 2;
    margin: 0;
  }

  .figure {
    margin: 2rem 0;
    text-align: center;
  }

  .placeholder-image {
    background: rgba(255, 255, 255, 0.04);
    border: 2px dashed var(--border-medium);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 1rem;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .placeholder-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  figcaption {
    color: var(--muted);
    font-size: 0.95rem;
    font-style: italic;
  }

  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }

    .equation-block {
      padding: 1rem;
    }

    .placeholder-image {
      min-height: 200px;
    }
  }
</style>
